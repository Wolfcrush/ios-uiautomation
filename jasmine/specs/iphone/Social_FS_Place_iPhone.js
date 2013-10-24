describe("Banjo - Social. Foursquare. Place.", function() {

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
it("FORSQUARE.PLACE.SEARCH", function() {
	UIALogger.logStart("FORSQUARE.PLACE.SEARCH");
	
	Win.tableViews()[0].cells()[2].tap();
	Loading("NEARBY PLACES")
	Wait(Win.tableViews()[0].textFields()[0]);
	Win.tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString("Co\n");
	Wait(Win.tableViews()[0].cells()[1]);
	Screenshot(num++);

	if (Win.tableViews()[0].cells()[1].checkIsValid()) {
		UIALogger.logPass("FORSQUARE.PLACE.SEARCH PASSED");
	}
	else {
		UIALogger.logFail("FORSQUARE.PLACE.SEARCH FAILED");
		throw new Error("FORSQUARE.PLACE.SEARCH FAILED");
	}
});
	
//---------------------------------------
it("FORSQUARE.UI", function() {
	UIALogger.logStart("FORSQUARE.UI");

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
it("FORSQUARE.POST.PLACE", function() {
	UIALogger.logStart("FORSQUARE.POST.TEXT");

	if (app.windows()[1].buttons()["social icon twitter"].isVisible()) {
		app.windows()[1].buttons()["social icon twitter"].tap();
	}
	if (app.windows()[1].buttons()["social icon facebook"].isVisible()) {
		app.windows()[1].buttons()["social icon facebook"].tap();
	}
	app.navigationBar().buttons()[1].tap();
	Wait(Win.tableViews()[0].cells()[3]);

	if (Win.tableViews()[0].cells()[3].checkIsValid()) {
		UIALogger.logPass("FORSQUARE.POST.PLACE PASSED");
	}
	else {
		UIALogger.logFail("FORSQUARE.POST.PLACE FAILED");
		throw new Error("FORSQUARE.POST.PLACE FAILED");
	}
	
	Wait(app.tabBar().buttons()[0]);
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});