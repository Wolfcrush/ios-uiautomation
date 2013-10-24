describe("Banjo - Social. LinkedIn. Send a Photo & Text.", function() {

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
it("LINKEDIN.UI", function() {
	UIALogger.logStart("LINKEDIN.UI");

	Win.tableViews()[0].cells()[3].tap();
	Wait(app.windows()[1].buttons()[0], 2);
	Screenshot(num++);

	if (app.navigationBar().leftButton().checkIsValid()
		&& app.windows()[1].buttons()[0].checkIsValid()
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
it("LINKEDIN.POST.PHOTO&TEXT", function() {
	UIALogger.logStart("LINKEDIN.POST.PHOTO&TEXT");

	Win.textViews()[0].setValue(RandomString());
	target.delay(1);
	app.windows()[1].buttons()["social icon camera"].tap();
	target.delay(2);
	
	if (app.actionSheet().buttons()[1].checkIsValid()) {
		target.delay(1);
		app.actionSheet().buttons()[1].tap();
		target.delay(2);
	}

	Win.tableViews()[0].cells()[0].tap();
	target.delay(1);
	Win.tableViews()[0].cells()[0].scrollToVisible();
	target.delay(1);
		
	var randomnum = parseInt(Math.random() * 4);
	Win.tableViews()[0].cells()[0].images()[randomnum].tap();
	target.delay(1);
	Win.images()["PLCameraButtonBarBlack"].buttons()[1].tap();
	target.delay(1);
	Wait(app.windows()[1].buttons()["social icon camera"]);
	target.delay(2);
	Screenshot(num++, 2);
	app.navigationBar().buttons()[1].tap();
	target.delay(3);
	Wait(Win.tableViews()[0].cells()[3]);

	if (Win.tableViews()[0].cells()[3].checkIsValid()) {
		UIALogger.logPass("LINKEDIN.POST.PHOTO&TEXT PASSED");
	}
	else {
		UIALogger.logFail("LINKEDIN.POST.PHOTO&TEXT FAILED");
		throw new Error("LINKEDIN.POST.PHOTO&TEXT FAILED");
	}
	
	Wait(app.tabBar().buttons()[0]);
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});