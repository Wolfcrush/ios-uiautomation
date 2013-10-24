describe("Banjo - Social. Twitter. Send a Photo (Landscape).", function() {

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
it("TWITTER.UI", function() {
	UIALogger.logStart("TWITTER.UI");

	Win.scrollViews()[0].buttons()[0].tap();
	Wait(app.windows()[1].buttons()["social geo"], 2);
	Screenshot(num++);

	if (app.navigationBar().leftButton().checkIsValid()
		&& app.windows()[1].buttons()["social geo"].checkIsValid()
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
	
	if (app.windows()[1].popover().actionSheet().buttons()[2].checkIsValid()) {
		target.delay(1);
		app.windows()[1].popover().actionSheet().buttons()[2].tap();
		target.delay(4);
		}

	app.windows()[1].popover().tableViews()[0].cells()[0].tap();
	target.delay(2);

	var randomnum = parseInt(Math.random() * 4);
	app.windows()[1].popover().tableViews()[0].visibleCells()[1].images()[randomnum].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
	target.delay(1);
	app.windows()[1].popover().navigationBar().rightButton().tap();
	target.delay(1);
	Wait(app.windows()[1].buttons()["social icon camera"]);
	target.delay(2);
	Screenshot(num++, 2);
	app.navigationBar().buttons()[1].tap();
	Loading("TWEET");
	Wait(Win.scrollViews()[0].buttons()[4]);

	if (Win.scrollViews()[0].buttons()[4].checkIsValid()) {
		UIALogger.logPass("TWITTER.POST.PHOTO PASSED");
	}
	else {
		UIALogger.logFail("TWITTER.POST.PHOTO FAILED");
		throw new Error("TWITTER.POST.PHOTO FAILED");
	}
	
	//Wait(app.tabBar().buttons()[0]);
	//app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});