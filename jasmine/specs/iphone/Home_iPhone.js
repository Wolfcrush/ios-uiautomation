describe("Banjo - Home Page.", function() {

//---------------------------------------
it("HOME.UI", function() {
	UIALogger.logStart("HOME.UI");

	if (app.navigationBar().leftButton().checkIsValid()
		&& app.navigationBar().buttons()[0].checkIsValid()
		&& Win.tableViews()[2].cells()[0].buttons()[0].checkIsValid()
		&& Win.tableViews()[2].cells()[1].buttons()[0].checkIsValid()
		&& Win.tableViews()[2].cells()[1].buttons()["home favorites normal"].checkIsValid()
		&& Win.tableViews()[2].cells()[1].buttons()[2].checkIsValid()
		&& Win.tableViews()[2].cells()[2].buttons()[0].checkIsValid()
		&& Win.tableViews()[2].cells()[2].buttons()[1].checkIsValid()
		&& Win.tableViews()[2].cells()[2].buttons()[2].checkIsValid()
		&& Win.tableViews()[2].cells()[3].buttons()[0].checkIsValid()
		&& Win.tableViews()[2].cells()[3].buttons()[1].checkIsValid()
		&& Win.tableViews()[2].cells()[3].buttons()[2].checkIsValid()
		&& app.tabBar().buttons()[0].checkIsValid()
		&& app.tabBar().buttons()[1].checkIsValid()
		&& app.tabBar().buttons()[2].checkIsValid()
		&& app.tabBar().buttons()[3].checkIsValid()) {
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