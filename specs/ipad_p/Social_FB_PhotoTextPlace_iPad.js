describe("Banjo - Social. Facebook. Send Photo, Text & Place (Portrait).", function() {

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
it("FACEBOOK.UI", function() {
	UIALogger.logStart("FACEBOOK.UI");

	Win.scrollViews()[0].buttons()[1].tap();
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
it("FACEBOOK.POST.PHOTO&TEXT&PLACE", function() {
	UIALogger.logStart("FACEBOOK.POST.PHOTO&TEXT&PLACE");

	Win.textViews()[0].setValue(RandomString());
	target.delay(1);
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
	app.windows()[1].buttons()["social btn place"].tap();
	target.delay(2);
	Loading("NEARBY PLACES")
	Win.tableViews()[0].cells()[1].tap();
	Screenshot(num++, 2);
	app.navigationBar().buttons()[1].tap();
	target.delay(3);
	Wait(Win.scrollViews()[0].buttons()[4]);
	
	if (Win.scrollViews()[0].buttons()[4].checkIsValid()) {
		UIALogger.logPass("FACEBOOK.POST.PHOTO&TEXT&PLACE PASSED");
	}
	else {
		UIALogger.logFail("FACEBOOK.POST.PHOTO&TEXT&PLACE FAILED");
		throw new Error("FACEBOOK.POST.PHOTO&TEXT&PLACE FAILED");
	}
	
	//Wait(app.tabBar().buttons()[0]);
	//app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});