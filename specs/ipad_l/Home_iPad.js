describe("Banjo - Home Page (Landscape).", function() {

//---------------------------------------
it("HOME.UI", function() {
	UIALogger.logStart("HOME.UI");

	if (app.navigationBar().buttons()[0].checkIsValid()
		&& Win.scrollViews()[0].buttons()[0].checkIsValid()
		&& Win.scrollViews()[0].buttons()[1].checkIsValid()
		&& Win.scrollViews()[0].buttons()[2].checkIsValid()
		&& Win.scrollViews()[0].buttons()[3].checkIsValid()
		&& Win.scrollViews()[0].buttons()[4].checkIsValid()
		&& Win.scrollViews()[0].buttons()[5].checkIsValid()
		&& Win.scrollViews()[0].buttons()[6].checkIsValid()
		&& Win.scrollViews()[0].buttons()[7].checkIsValid()
		&& Win.scrollViews()[0].textFields()[0].checkIsValid()
		&& Win.scrollViews()[0].staticTexts()[1].checkIsValid()
		&& app.tabBar().buttons()[0].checkIsValid()
		&& app.tabBar().buttons()[1].checkIsValid()
		&& app.tabBar().buttons()[2].checkIsValid()
		&& app.tabBar().buttons()[3].checkIsValid()
		&& app.tabBar().buttons()[4].checkIsValid()) {
		UIALogger.logPass("HOME.UI PASSED");
	}
	else {
		UIALogger.logFail("HOME.UI FAILED");
		throw new Error("FAILED - Some UI Elements are missing.");
	}
	target.delay(2);
});
//---------------------------------------

});