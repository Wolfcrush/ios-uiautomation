describe("Banjo - Social. Foursquare. Send a Photo & Text (Portrait).", function() {

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
it("FORSQUARE.UI", function() {
	UIALogger.logStart("FORSQUARE.UI");

	Win.scrollViews()[0].buttons()[2].tap();
	Loading("NEARBY PLACES")
	Wait(Win.tableViews()[0].cells()[1], 2);
	Win.tableViews()[0].cells()[1].tap();
	Wait(app.windows()[1].buttons()["social icon camera"], 2);
	Screenshot(num++);

	if (app.navigationBar().leftButton().checkIsValid()
		&& app.windows()[1].buttons()["social icon camera"].checkIsValid()
		&& app.navigationBar().buttons()[1].checkIsValid()
		&& Win.staticTexts().firstWithName("140").checkIsValid()
		&& app.windows()[1].staticTexts()[2].checkIsValid()) {
		UIALogger.logPass("FORSQUARE.UI PASSED");
	}
	else {
		UIALogger.logFail("FORSQUARE.UI FAILED");
		throw new Error("FORSQUARE.UI FAILED");
	}
});

//---------------------------------------
it("FORSQUARE.POST.PHOTO&TEXT", function() {
	UIALogger.logStart("FORSQUARE.POST.PHOTO&TEXT");

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
	Screenshot(num++, 2);
	if (app.windows()[1].buttons()["social icon twitter"].isVisible()) {
		app.windows()[1].buttons()["social icon twitter"].tap();
	}
	if (app.windows()[1].buttons()["social icon facebook"].isVisible()) {
		app.windows()[1].buttons()["social icon facebook"].tap();
	}
	app.navigationBar().buttons()[1].tap();
	target.delay(3);
	Wait(Win.scrollViews()[0].buttons()[4]);

	if (Win.scrollViews()[0].buttons()[4].checkIsValid()) {
		UIALogger.logPass("FORSQUARE.POST.PHOTO&TEXT PASSED");
	}
	else {
		UIALogger.logFail("FORSQUARE.POST.PHOTO&TEXT FAILED");
		throw new Error("FORSQUARE.POST.PHOTO&TEXT FAILED");
	}
	
	//Wait(app.tabBar().buttons()[0]);
	//app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});