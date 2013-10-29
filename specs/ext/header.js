//UIALogger.logMessage("Starting Test Script");

UIATarget.onAlert = function onAlert(alert){
    //UIALogger.logMessage("alert Shown");
	target.frontMostApp().alert().defaultButton().tap();
}

function Screenshot(num, pause){
	if (!pause) {
        target.delay(0);
    }
    else {
        target.delay(pause);
    }
	target.captureScreenWithName("screenshot-"+num);
}

function Wait(element, preDelay) {
    if (!preDelay) {
        target.delay(0);
    }
    else {
        target.delay(preDelay);
    }

    var found = false;
    var counter = 0;      
    while ((!found) && (counter < 80)) {    
        if (!element.isValid()) {
            target.delay(0.5);
            counter++;
        }
        else {
            found = true;
            target.delay(1);
        }
    }
}

function Loading(text) {
	var startsec = parseInt(new Date() / 1000);
	target.delay(2);
	var loading = true;
    var counter = 0;
	var maxtime = 10;
    while ((loading) && (counter < maxtime)) {
		if (target.frontMostApp().mainWindow().buttons()[2].isVisible()) {
            target.frontMostApp().mainWindow().buttons()[2].tap();
			target.delay(1);
        }
		if (target.frontMostApp().mainWindow().staticTexts()[0].isVisible() && !target.frontMostApp().mainWindow().staticTexts().firstWithPredicate("name contains[c] '"+user2_name+"'").checkIsValid()) {
            target.delay(2);
            counter++;
        }
        else {
            loading = false;
            target.delay(1);
        }
    }
	if (counter >= maxtime) {
		var endsec = parseInt(new Date() / 1000);
		var totaltime = endsec - startsec;
		throw new Error("FAILED to load " + text + " after " + totaltime + " sec");
	}
}

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var Win = app.mainWindow();
var num=0;
var i=0
var model=target.model();
//target.setLocationWithOptions({latitude: 40.643772, longitude: -73.781993}, {altitude: 200.0, speed: 5});
target.logElementTree();
//UIALogger.logMessage("Device Name: " + target.name() + " / Model: " + model + " / OS Version: " + target.systemVersion());