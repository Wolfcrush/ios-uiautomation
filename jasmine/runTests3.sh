#! /bin/sh
start=$(date +"%s")
#------------------------------
XCODE_PATH=`xcode-select -print-path`
TRACETEMPLATE="/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate"
BASE_TEST_SCRIPT=$1
APP_LOCATION=$2
DEVICE_ID=$3

#/usr/bin/xcodebuild -scheme Dev\ Staging -arch armv7 -sdk iphoneos

#./jasmine/transporter_chief.rb "./Build/Products/Dev-iphoneos/Banjo Staging.app"

cd ./jasmine

#------------------------------
log_path="./temp_logs"
rm -r $log_path
mkdir $log_path
#------------------------------

if [ ! $# -gt 1 ]; then
	echo "You must specify the app location and the test file."
	echo "\t (optionally supply unique device ID of physical iOS device)"
	echo "\t eg. ./build.sh suite.js <xcodeproject directory>/build/Debug-iphonesimulator/myapp.app <device-udid>"
	exit -1
fi

# If running on device, only need name of app, full path not important
if [ ! "$DEVICE_ID" = "" ]; then
  RUN_ON_SPECIFIC_DEVICE_OPTION="-w $DEVICE_ID"
  #APP_LOCATION=`basename $APP_LOCATION`
fi

# Create junit reporting directory
if [ ! -d "test-reports" ]; then
  mkdir test-reports
fi

# Kick off the instruments build
instruments \
$RUN_ON_SPECIFIC_DEVICE_OPTION \
-t $TRACETEMPLATE \
"$APP_LOCATION" \
-e UIASCRIPT $BASE_TEST_SCRIPT \
-e UIARESULTSPATH $log_path | grep "<"  > test-reports/test-results.xml

# cleanup the tracefiles produced from instruments
rm -rf *.trace

#------------------------------
end=$(date +"%s")
totaltime=`echo "$end - $start" | bc`
timestamp=$(date +%m.%d.%y_%H.%M.%S)
old_rep="./test-reports/test-results.xml"
new_rep="./test-reports/archive/"$BUILD_ID".xml"
rep_email="./test-reports/email.txt"
rep_value=$(<./test-reports/test-results.xml)
#cp -v $old_rep $new_rep
sed -e 's/<?xml\ version=\"1.0\"\ encoding=\"UTF-8\"\ ?>/<?xml\ version=\"1.0\"\ encoding=\"UTF-8\"\?><\?xml-stylesheet\ type=\"text\/xsl\"\ href=\"style.xsl\"?>/' -e 's/<testsuites>/<testsuites\ totaltime=\"'$totaltime'\">/' $old_rep > $new_rep
#open -a "Safari.app" $new_rep

sed -e 's/<?xml\ version=\"1.0\"\ encoding=\"UTF-8\"\ ?>//' -e 's/<testsuites>//' -e 's/<\/testsuites>//' -e 's/<\/testsuite>//' -e 's/<testcase.*//' -e 's/<testsuite/Testsuite/' -e 's/\">/\"/' -e 's/\ \ //' -e '/^$/d' -e 's/\ name=\"/:\ \"/' -e 's/\ timestamp=\".*//' $old_rep > $rep_email
#date | mail -s "UIAutomation: Test Report" dmytro@teambanjo.com < $rep_email
#------------------------------

# fail script if any failures have been generated
if [ `grep "<failure>" test-reports/test-results.xml | wc -l` -gt 0 ]; then
		#mail -s "UIAutomation: Build Failed" dmytro@teambanjo.com < $rep_email
		rm $rep_email
        echo 'Build Failed'
        exit -1
else
		if [ "$rep_value" == "" ]; then
			#mail -s "UIAutomation: Build Failed" dmytro@teambanjo.com
			rm $rep_email
	        echo 'Build Failed'
	        exit -1
		else
			#mail -s "UIAutomation: Build Passed" dmytro@teambanjo.com < $rep_email
			rm $rep_email
	        echo 'Build Passed'
	        exit 0
		fi
fi
