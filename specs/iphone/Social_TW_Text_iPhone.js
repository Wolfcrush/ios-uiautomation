describe("Banjo - Social. Twitter. Send a Text.", function() {

//---------------------------------------
it("SOCIAL.UI", function() {
	UIALogger.logStart("SOCIAL.UI");

	app.tabBar().buttons()[1].tap();
	Wait(Win.tableViews()[0].staticTexts()[0], 2);
	Screenshot(num++);

	if (Win.tableViews()[0].staticTexts()[0].checkIsValid()
		&& Win.tableViews()[0].cells()[0].checkIsValid()
		&& Win.tableViews()[0].cells()[1].checkIsValid()
		&& Win.tableViews()[0].cells()[2].checkIsValid()
		&& Win.tableViews()[0].cells()[3].checkIsValid()
		&& Win.tableViews()[0].buttons()[0].checkIsValid()) {
		UIALogger.logPass("SOCIAL.UI PASSED");
	}
	else {
		UIALogger.logFail("SOCIAL.UI FAILED");
		throw new Error("SOCIAL.UI FAILED");
	}
});
	
//---------------------------------------
it("TWITTER.UI", function() {
	UIALogger.logStart("TWITTER.UI");

	Win.tableViews()[0].cells()[0].tap();
	Wait(app.windows()[1].buttons()[0], 2);
	Screenshot(num++);

	if (app.navigationBar().leftButton().checkIsValid()
		&& app.windows()[1].buttons()[0].checkIsValid()
		&& app.windows()[1].buttons()["social icon camera"].checkIsValid()
		&& app.navigationBar().buttons()[1].checkIsValid()
		&& Win.staticTexts().firstWithName("140").checkIsValid()) {
		UIALogger.logPass("TWITTER.UI PASSED");
	}
	else {
		UIALogger.logFail("TWITTER.UI FAILED");
		throw new Error("TWITTER.UI FAILED");
	}
});
	
//---------------------------------------
it("SOCIAL.GEO.OFF", function() {
	UIALogger.logStart("SOCIAL.GEO.OFF");

	app.windows()[1].buttons()[0].tap();

	if (Win.staticTexts()[2].checkIsValid()) {
		UIALogger.logPass("SOCIAL.GEO.OFF PASSED");
	}
	else {
		UIALogger.logFail("SOCIAL.GEO.OFF FAILED");
		throw new Error("SOCIAL.GEO.OFF FAILED");
	}
	target.delay(2);
});

//---------------------------------------
it("SOCIAL.GEO.ON", function() {
	UIALogger.logStart("SOCIAL.GEO.ON");

	app.windows()[1].buttons()[0].tap();

	if (Win.staticTexts()[2].checkIsValid()) {
		UIALogger.logPass("SOCIAL.GEO.ON PASSED");
	}
	else {
		UIALogger.logFail("SOCIAL.GEO.ON FAILED");
		throw new Error("SOCIAL.GEO.ON FAILED");
	}
	target.delay(2);
	
	app.navigationBar().leftButton().tap();
	Win.tableViews()[0].cells()[0].tap();
});

//---------------------------------------
it("TWITTER.POST.TEXT", function() {
	UIALogger.logStart("TWITTER.POST.TEXT");

	Win.textViews()[0].setValue(RandomString());
	Screenshot(num++, 2);
	app.navigationBar().buttons()[1].tap();
	Wait(Win.tableViews()[0].cells()[3]);

	if (Win.tableViews()[0].cells()[3].checkIsValid()) {
		UIALogger.logPass("TWITTER.POST.TEXT PASSED");
	}
	else {
		UIALogger.logFail("TWITTER.POST.TEXT FAILED");
		throw new Error("TWITTER.POST.TEXT FAILED");
	}
	
	Wait(app.tabBar().buttons()[0]);
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});