describe("Banjo - Social. Suggest SN (Portrait).", function() {

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
it("SUGGEST.UI", function() {
	UIALogger.logStart("SUGGEST.UI");

	Win.scrollViews()[0].buttons()[4].tap();
	Wait(Win.scrollViews()[0].textFields()[1]);
	Screenshot(num++);

	if (app.navigationBar().leftButton().checkIsValid()
		&& Win.scrollViews()[0].textFields()[0].checkIsValid()
		&& Win.scrollViews()[0].textFields()[1].checkIsValid()
		&& app.navigationBar().buttons()[1].checkIsValid()) {
		UIALogger.logPass("SUGGEST.UI PASSED");
	}
	else {
		UIALogger.logFail("SUGGEST.UI FAILED");
		throw new Error("SUGGEST.UI FAILED");
	}
});
	
//---------------------------------------
it("SUGGEST.WRONG.EMAIL", function() {
	UIALogger.logStart("SUGGEST.WRONG.EMAIL");

	Win.scrollViews()[0].textFields()[0].tap();
	app.keyboard().typeString("Test");
	Win.scrollViews()[0].textFields()[1].tap();
	app.keyboard().typeString("Email");
	app.navigationBar().buttons()[1].tap();
	Screenshot(num++, 1);

	if (Win.buttons()["icon close light normal"].checkIsValid()) {
		UIALogger.logPass("SUGGEST.WRONG.EMAIL PASSED");
	}
	else {
		UIALogger.logFail("SUGGEST.WRONG.EMAIL FAILED");
		throw new Error("SUGGEST.WRONG.EMAIL FAILED");
	}
	
	Win.buttons()["icon close light normal"].tap();
	app.navigationBar().leftButton().tap();
	target.delay(1);
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});