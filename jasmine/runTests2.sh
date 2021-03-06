#! /bin/sh
#------------------------------
XCODE_PATH=`xcode-select -print-path`
TRACETEMPLATE="/Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate"
BASE_TEST_SCRIPT=$1
APP_LOCATION=$2
DEVICE_ID=$3

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
instruments -v \
$RUN_ON_SPECIFIC_DEVICE_OPTION \
-t $TRACETEMPLATE \
"$APP_LOCATION" \
-e UIASCRIPT $BASE_TEST_SCRIPT \
-e UIARESULTSPATH $log_path | grep "<"  > test-reports/test-results.xml

# cleanup the tracefiles produced from instruments
rm -rf *.trace

#------------------------------
rep_value=$(<./test-reports/test-results.xml)

# fail script if any failures have been generated
if [ `grep "<failure>" test-reports/test-results.xml | wc -l` -gt 0 ]; then
   echo 'Build Failed'
   exit -1
else
   if [ "$rep_value" == "" ]; then
      echo 'Build Failed'
      exit -1
   else
      echo 'Build Passed'
      exit 0
   fi
fi
