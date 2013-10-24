describe("Banjo - Social. Twitter. Send a Photo.", function() {

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
		&& Win.staticTexts().firstWithName("140").checkIsValid()) {
		UIALogger.logPass("TWITTER.UI PASSED");
	}
	else {
		UIALogger.logFail("TWITTER.UI FAILED");
		throw new Error("TWITTER.UI FAILED");
	}
});

//---------------------------------------
it("TWITTER.POST.PHOTO", function() {
	UIALogger.logStart("TWITTER.POST.PHOTO");

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
		UIALogger.logPass("TWITTER.POST.PHOTO PASSED");
	}
	else {
		UIALogger.logFail("TWITTER.POST.PHOTO FAILED");
		throw new Error("TWITTER.POST.PHOTO FAILED");
	}
	
	Wait(app.tabBar().buttons()[0]);
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});