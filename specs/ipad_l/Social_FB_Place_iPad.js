describe("Banjo - Social. Facebook. Place (Landscape).", function() {

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
it("FACEBOOK.PLACE.SEARCH", function() {
	UIALogger.logStart("FACEBOOK.PLACE.SEARCH");

	app.windows()[1].buttons()["social btn place"].tap();
	target.delay(2);
	Loading("NEARBY PLACES")
	Win.tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString("Co\n");
	Wait(Win.tableViews()[0].cells()[0]);
	Screenshot(num++, 3);
	Win.tableViews()[0].cells()[0].tap();
	
	if (app.windows()[1].buttons()["social btn place"].checkIsValid()) {
		UIALogger.logPass("FACEBOOK.PLACE.SEARCH PASSED");
	}
	else {
		UIALogger.logFail("FACEBOOK.PLACE.SEARCH FAILED");
		throw new Error("FACEBOOK.PLACE.SEARCH FAILED");
	}
});

//---------------------------------------
it("FACEBOOK.POST.PLACE", function() {
	UIALogger.logStart("FACEBOOK.POST.PLACE");

	//app.windows()[1].buttons()["social btn place"].tap();
	//target.delay(2);
	//Win.tableViews()[0].cells()[1].tap();
	app.navigationBar().buttons()[1].tap();
	target.delay(3);
	Wait(Win.scrollViews()[0].buttons()[4]);
	
	if (Win.scrollViews()[0].buttons()[4].checkIsValid()) {
		UIALogger.logPass("FACEBOOK.POST.PLACE PASSED");
	}
	else {
		UIALogger.logFail("FACEBOOK.POST.PLACE FAILED");
		throw new Error("FACEBOOK.POST.PLACE FAILED");
	}
	
	//Wait(app.tabBar().buttons()[0]);
	//app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});