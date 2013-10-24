describe("Banjo - Settings.", function() {

//---------------------------------------
it("SETTINGS.UI", function() {
	UIALogger.logStart("SETTINGS.UI");

	app.navigationBar().buttons()[0].tap();
	app.navigationBar().rightButton().tap();
	Screenshot(num++);

	if (Win.scrollViews()[0].buttons()["icon settings feedback"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings faqs"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings privacy"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings sn"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings blocked"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings pause"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings location"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings clear"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings started"].checkIsValid()
		&& Win.scrollViews()[0].buttons()["icon settings logout"].checkIsValid()) {
		UIALogger.logPass("SETTINGS.UI PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.UI FAILED");
		throw new Error("SETTINGS.UI FAILED");
	}
});
//---------------------------------------
it("SETTINGS.FEEDBACK.UI", function() {
	UIALogger.logStart("SETTINGS.FEEDBACK.UI");

	Win.scrollViews()[0].buttons()["icon settings feedback"].tap();
	Screenshot(num++);

	if (Win.scrollViews()[0].staticTexts()[0].checkIsValid()
	&& Win.scrollViews()[0].textFields()[0].checkIsValid()
	&& Win.scrollViews()[0].staticTexts().firstWithName("500").checkIsValid()
	&& Win.scrollViews()[0].staticTexts()[2].checkIsValid()
	&& app.navigationBar().buttons()[1].checkIsValid()) {
		UIALogger.logPass("SETTINGS.FEEDBACK.UI PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.FEEDBACK.UI FAILED");
		throw new Error("SETTINGS.FEEDBACK.UI FAILED");
	}
});
//---------------------------------------
it("SETTINGS.FEEDBACK.WRONG.EMAIL", function() {
	UIALogger.logStart("SETTINGS.FEEDBACK.WRONG.EMAIL");

	Win.scrollViews()[0].textFields()[0].tap();
	app.keyboard().typeString("Email");
	Win.scrollViews()[0].staticTexts()[2].tap();
	app.keyboard().typeString("Test");
	app.navigationBar().buttons()[1].tap();
	Screenshot(num++, 1);

	if (Win.buttons()["icon close light normal"].checkIsValid()) {
		UIALogger.logPass("SETTINGS.FEEDBACK.WRONG.EMAIL PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.FEEDBACK.WRONG.EMAIL FAILED");
		throw new Error("SETTINGS.FEEDBACK.WRONG.EMAIL FAILED");
	}
	
	Win.buttons()["icon close light normal"].tap();
	target.delay(1);
	app.navigationBar().leftButton().tap();
});
//---------------------------------------
it("SETTINGS.FAQ.UI", function() {
	UIALogger.logStart("SETTINGS.FAQ.UI");

	Win.scrollViews()[0].buttons()["icon settings faqs"].tap();
	Wait(Win.scrollViews()[0].webViews()[0].links()[0], 3);
	Screenshot(num++);

	if (Win.scrollViews()[0].webViews()[0].links()[0].checkIsValid()) {
		UIALogger.logPass("SETTINGS.FAQ.UI PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.FAQ.UI FAILED");
		throw new Error("SETTINGS.FAQ.UI FAILED");
	}
	Win.scrollViews()[0].webViews()[0].links()[0].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
	target.delay(1);
	app.navigationBar().leftButton().tap();
});
//---------------------------------------
it("SETTINGS.PRIVACY", function() {
	UIALogger.logStart("SETTINGS.PRIVACY");

	Win.scrollViews()[0].buttons()["icon settings privacy"].tap();
	Wait(Win.scrollViews()[0].webViews()[0].links()[0], 3);
	Screenshot(num++);

	if (Win.scrollViews()[0].webViews()[0].links()[0].checkIsValid()
	&& Win.scrollViews()[0].webViews()[0].links()[1].checkIsValid()) {
		UIALogger.logPass("SETTINGS.PRIVACY PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.FAQ.UI FAILED");
		throw new Error("SETTINGS.FAQ.UI FAILED");
	}
	
	Win.scrollViews()[0].webViews()[0].links()[0].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
	Wait(Win.scrollViews()[0].webViews()[0].staticTexts()["1. WEBSITES"]);
	Screenshot(num++);
	app.navigationBar().leftButton().tap();
	
	Win.scrollViews()[0].webViews()[0].links()[1].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
	Wait(Win.scrollViews()[0].webViews()[0].staticTexts()["1. How your Privacy is Protected"]);
	Screenshot(num++);
	app.navigationBar().leftButton().tap();
	
	Win.buttons()["privacy btn private"].tap();
	Win.staticTexts()[2].checkIsValid();
	Screenshot(num++, 1);
	Win.buttons()["privacy btn friends"].tap();
	Win.staticTexts()[2].checkIsValid();
	Screenshot(num++, 1);
	Win.buttons()["privacy btn community"].tap();
	Win.staticTexts()[2].checkIsValid();
	Screenshot(num++, 1);
	
	app.navigationBar().leftButton().tap();
});
//---------------------------------------
it("SETTINGS.SN.UI", function() {
	UIALogger.logStart("SETTINGS.SN.UI");

	Win.scrollViews()[0].buttons()["icon settings sn"].tap();
	Wait(Win.tableViews()[0].staticTexts()[0], 3);
	Screenshot(num++);

	if (Win.tableViews()[0].staticTexts()[0].checkIsValid()
	&& Win.tableViews()[0].cells()[1].checkIsValid()
	&& Win.tableViews()[0].cells()[2].checkIsValid()
	&& Win.tableViews()[0].cells()[3].checkIsValid()
	&& Win.tableViews()[0].cells()[4].checkIsValid()
	&& Win.tableViews()[0].cells()[5].checkIsValid()
	&& app.navigationBar().rightButton().checkIsValid()) {
		UIALogger.logPass("SETTINGS.SN.UI PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.SN.UI FAILED");
		throw new Error("SETTINGS.SN.UI FAILED");
	}
	app.navigationBar().rightButton().tap();
	Win.tableViews()[0].cells()[0].switches()[0].tap();
	Screenshot(num++);
	app.navigationBar().leftButton().tap();
});
//---------------------------------------
it("SETTINGS.BLOCKED.UI", function() {
	UIALogger.logStart("SETTINGS.BLOCKED.UI");

	Win.scrollViews()[0].buttons()["icon settings blocked"].tap();
	Wait(Win.tableViews()[0].textFields()[0]);
	Screenshot(num++);

	if (Win.tableViews()[0].textFields()[0].checkIsValid()) {
		UIALogger.logPass("SETTINGS.BLOCKED.UI PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.BLOCKED.UI FAILED");
		throw new Error("SETTINGS.BLOCKED.UI FAILED");
	}
	
	Win.tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString("zzzzz\n");
	Screenshot(num++, 2);
	app.navigationBar().leftButton().tap();
});
//---------------------------------------
it("SETTINGS.ALERTS.UI", function() {
	UIALogger.logStart("SETTINGS.ALERTS.UI");

	Win.scrollViews()[0].buttons()["icon settings pause"].tap();
	Wait(Win.tableViews()[0].cells()[0].buttons()["icon notification notpaused no"]);
	Screenshot(num++);

	if (Win.tableViews()[0].textFields()[0].checkIsValid()
	&& Win.tableViews()[0].staticTexts()[0].checkIsValid()
	&& app.navigationBar().rightButton().checkIsValid()
	&& Win.tableViews()[0].cells()[0].buttons()["icon notification notpaused no"].checkIsValid()) {
		UIALogger.logPass("SETTINGS.ALERTS.UI PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.ALERTS.UI FAILED");
		throw new Error("SETTINGS.ALERTS.UI FAILED");
	}
});
//---------------------------------------
it("SETTINGS.ALERTS.SEARCH.BLANK", function() {
	UIALogger.logStart("SETTINGS.ALERTS.SEARCH.BLANK");
	
	Win.tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString("zzzzz\n");
	Wait(Win.tableViews()[0].staticTexts()[1]);
	Screenshot(num++, 2);
	
	if (Win.tableViews()[0].staticTexts()[1].checkIsValid()) {
		UIALogger.logPass("SETTINGS.ALERTS.SEARCH.BLANK PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.ALERTS.SEARCH.BLANK FAILED");
		throw new Error("SETTINGS.ALERTS.SEARCH.BLANK FAILED");
	}
	Win.tableViews()[0].buttons()[0].tap();
});
//---------------------------------------
it("SETTINGS.ALERTS.SEARCH", function() {
	UIALogger.logStart("SETTINGS.ALERTS.SEARCH");
	
	Win.tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString("Conner\n");
	Wait(Win.tableViews()[0].cells()["Conner Thorne"]);
	Screenshot(num++, 2);
	
	if (Win.tableViews()[0].cells()["Conner Thorne"].checkIsValid()
	&& Win.tableViews()[0].cells()[0].buttons()["icon notification notpaused no"].checkIsValid()) {
		UIALogger.logPass("SETTINGS.ALERTS.SEARCH PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.ALERTS.SEARCH FAILED");
		throw new Error("SETTINGS.ALERTS.SEARCH FAILED");
	}
	Win.tableViews()[0].cells()["Conner Thorne"].buttons()["icon notification notpaused no"].tap();
	Screenshot(num++, 2);
	Win.tableViews()[0].cells()["Conner Thorne"].buttons()["icon notification paused norma"].tap();
	target.delay(2);
	Win.tableViews()[0].buttons()[0].tap();
});
//---------------------------------------
it("SETTINGS.ALERTS.DISTANCE&TIME", function() {
	UIALogger.logStart("SETTINGS.ALERTS.DISTANCE&TIME");
	
	app.navigationBar().rightButton().tap();
	target.delay(1);
	Win.sliders()[0].dragToValue(0.51);
	Screenshot(num++, 1);
	Win.sliders()[0].dragToValue(0.98);
	Screenshot(num++, 1);
	Win.buttons()[0].tap();
	Screenshot(num++, 2);
	Win.buttons()["navbar icon pause"].tap();
	target.delay(2);
	
	if (Win.sliders()[0].checkIsValid()
	&& Win.buttons()[0].checkIsValid()
	&& Win.buttons()[1].checkIsValid()
	&& Win.buttons()[2].checkIsValid()
	&& Win.buttons()[3].checkIsValid()
	&& Win.buttons()[4].checkIsValid()
	&& Win.staticTexts()[0].checkIsValid()
	&& Win.staticTexts()[6].checkIsValid()) {
		UIALogger.logPass("SETTINGS.ALERTS.DISTANCE&TIME PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.ALERTS.DISTANCE&TIME FAILED");
		throw new Error("SETTINGS.ALERTS.DISTANCE&TIME FAILED");
	}
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.navigationBar().leftButton().tap();
});
//---------------------------------------
it("SETTINGS.LOCATION.UI", function() {
	UIALogger.logStart("SETTINGS.LOCATION.UI");
	
	Win.scrollViews()[0].buttons()["icon settings location"].tap();
	Wait(Win.staticTexts()[0]);
	Screenshot(num++);
	Win.switches()[0].setValue(0);
	Screenshot(num++);
	target.delay(4);
	Win.switches()[0].setValue(1);
	
	if (Win.staticTexts()[0].checkIsValid()
	&& Win.switches()[0].checkIsValid()) {
		UIALogger.logPass("SETTINGS.LOCATION.UI PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.LOCATION.UI FAILED");
		throw new Error("SETTINGS.LOCATION.UI FAILED");
	}
	app.navigationBar().leftButton().tap();
});
//---------------------------------------
it("SETTINGS.CLEAR.CACHE", function() {
	UIALogger.logStart("SETTINGS.CLEAR.CACHE");
	
	Win.scrollViews()[0].buttons()["icon settings clear"].tap();
	Screenshot(num++);
	target.delay(2);
	
	if (Win.buttons()[0].checkIsValid()) {
		UIALogger.logPass("SETTINGS.CLEAR.CACHE PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.CLEAR.CACHE FAILED");
		throw new Error("SETTINGS.CLEAR.CACHE FAILED");
	}
});
//---------------------------------------
it("SETTINGS.GETTING.STARTED", function() {
	UIALogger.logStart("SETTINGS.GETTING.STARTED");
	
	Win.scrollViews()[0].buttons()["icon settings started"].tap();
	Wait(Win.scrollViews()[0].webViews()[0].images()[2]);
	Screenshot(num++);
	
	if (Win.scrollViews()[0].webViews()[0].images()[0].checkIsValid()
	&& Win.scrollViews()[0].webViews()[0].images()[1].checkIsValid()
	&& Win.scrollViews()[0].webViews()[0].images()[2].checkIsValid()) {
		UIALogger.logPass("SETTINGS.GETTING.STARTED PASSED");
	}
	else {
		UIALogger.logFail("SETTINGS.GETTING.STARTED FAILED");
		throw new Error("SETTINGS.GETTING.STARTED FAILED");
	}
	app.navigationBar().leftButton().tap();
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});