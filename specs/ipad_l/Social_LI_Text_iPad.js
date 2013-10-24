describe("Banjo - Social. LinkedIn. Send a Text (Landscape).", function() {

//---------------------------------------
it("SOCIAL.UI", function() {
	UIALogger.logStart("SOCIAL.UI");

	app.tabBar().buttons()[1].tap();
	Wait(Win.scrollViews()[0].buttons()[4], 2);
	Screenshot(num++);

	if (Win.scrollViews()[0].staticTexts()[0].checkIsValid()
		&& Win.scrollViews()[0].buttons()[0].checkIsValid()
		&& Win.scrollViews()[0].buttons()[1].checkIsValid()
		&& Win.scrollViews()[0].buttons()[2].checkIsValid()
		&& Win.scrollViews()[0].buttons()[3].checkIsValid()
		&& Win.scrollViews()[0].buttons()[4].checkIsValid()) {
		UIALogger.logPass("SOCIAL.UI PASSED");
	}
	else {
		UIALogger.logFail("SOCIAL.UI FAILED");
		throw new Error("SOCIAL.UI FAILED");
	}
});
	
//---------------------------------------
it("LINKEDIN.UI", function() {
	UIALogger.logStart("LINKEDIN.UI");

	Win.scrollViews()[0].buttons()[3].tap();
	Wait(app.windows()[1].buttons()["social geo"], 2);
	Screenshot(num++);

	if (app.navigationBar().leftButton().checkIsValid()
		&& app.windows()[1].buttons()["social geo"].checkIsValid()
		&& app.windows()[1].buttons()["social icon camera"].checkIsValid()
		&& app.navigationBar().buttons()[1].checkIsValid()
		&& Win.staticTexts().firstWithName("250").checkIsValid()) {
		UIALogger.logPass("LINKEDIN.UI PASSED");
	}
	else {
		UIALogger.logFail("LINKEDIN.UI FAILED");
		throw new Error("LINKEDIN.UI FAILED");
	}
});
	
//---------------------------------------
it("SOCIAL.GEO.OFF", function() {
	UIALogger.logStart("SOCIAL.GEO.OFF");

	app.windows()[1].buttons()["social geo"].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
	target.delay(0.5);

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

	app.windows()[1].buttons()["social geo"].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
	target.delay(0.5);

	if (Win.staticTexts()[2].checkIsValid()) {
		UIALogger.logPass("SOCIAL.GEO.ON PASSED");
	}
	else {
		UIALogger.logFail("SOCIAL.GEO.ON FAILED");
		throw new Error("SOCIAL.GEO.ON FAILED");
	}
	target.delay(2);
	
	app.navigationBar().leftButton().tap();
	target.delay(1);
	Win.scrollViews()[0].buttons()[3].tap();
});

//---------------------------------------
it("LINKEDIN.POST.TEXT", function() {
	UIALogger.logStart("LINKEDIN.POST.TEXT");

	Win.textViews()[0].setValue(RandomString());
	Screenshot(num++, 2);
	app.navigationBar().buttons()[1].tap();
	Wait(Win.scrollViews()[0].buttons()[4]);

	if (Win.scrollViews()[0].buttons()[4].checkIsValid()) {
		UIALogger.logPass("LINKEDIN.POST.TEXT PASSED");
	}
	else {
		UIALogger.logFail("LINKEDIN.POST.TEXT FAILED");
		throw new Error("LINKEDIN.POST.TEXT FAILED");
	}
	
	//Wait(app.tabBar().buttons()[0]);
	//app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});