describe("Banjo - First UX (Portrait).", function() {

//---------------------------------------
it("DEV.FIRST UX", function() {
	
	app.tabBar().buttons()[4].tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.navigationBar().buttons()["DEV"].tap();
	target.delay(1);
	Win.tableViews()[0].cells()["First Time Experience"].tap();
	Screenshot(num++, 4);
	});
//---------------------------------------
it("TOUR.SCREEN.UI", function() {
	UIALogger.logStart("TOUR.SCREEN.UI");

	if (Win.staticTexts()[0].checkIsValid()
		&& Win.staticTexts()[1].checkIsValid()
		&& Win.staticTexts()[2].checkIsValid()
		&& Win.staticTexts()[3].checkIsValid()
		&& Win.buttons()[0].checkIsValid()) {
		UIALogger.logPass("TOUR.SCREEN.UI PASSED");
	}
	else {
		UIALogger.logFail("TOUR.SCREEN.UI FAILED");
		throw new Error("FAILED - Some UI Elements are missing.");
	}
	});
//---------------------------------------

});
