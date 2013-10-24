describe("Banjo - Social. Facebook. Send a Text.", function() {

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
it("FACEBOOK.UI", function() {
	UIALogger.logStart("FACEBOOK.UI");

	Win.tableViews()[0].cells()[1].tap();
	Wait(app.windows()[1].buttons()["social btn place"], 2);
	Screenshot(num++);

	if (app.navigationBar().leftButton().checkIsValid()
		&& Win.staticTexts()[2].checkIsValid()
		&& app.windows()[1].buttons()["social btn place"].checkIsValid()
		&& app.windows()[1].buttons()["social icon camera"].checkIsValid()
		&& app.navigationBar().buttons()[1].checkIsValid()
		&& Win.staticTexts().firstWithName("250").checkIsValid()) {
		UIALogger.logPass("FACEBOOK.UI PASSED");
	}
	else {
		UIALogger.logFail("FACEBOOK.UI FAILED");
		throw new Error("FACEBOOK.UI FAILED");
	}
});

//---------------------------------------
it("FACEBOOK.POST.TEXT", function() {
	UIALogger.logStart("FACEBOOK.POST.TEXT");

	Win.textViews()[0].setValue(RandomString());
	Screenshot(num++, 2);
	app.navigationBar().buttons()[1].tap();
	Wait(Win.tableViews()[0].cells()[3]);

	if (Win.tableViews()[0].cells()[3].checkIsValid()) {
		UIALogger.logPass("FACEBOOK.POST.TEXT PASSED");
	}
	else {
		UIALogger.logFail("FACEBOOK.POST.TEXT FAILED");
		throw new Error("FACEBOOK.POST.TEXT FAILED");
	}
	
	Wait(app.tabBar().buttons()[0]);
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});