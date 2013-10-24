describe("Banjo - Blank Screens.", function() {

//---------------------------------------
it("BLANK.CHATHISTORY", function() {
	UIALogger.logStart("BLANK.CHATHISTORY");

	app.tabBar().buttons()[2].tap();
	Wait(Win.buttons()[0], 3);
	Screenshot(num++);

	if (Win.tableViews()[0].buttons()[0].checkIsValid()) {
		UIALogger.logPass("BLANK.CHATHISTORY PASSED");
	}
	else {
		UIALogger.logFail("BLANK.CHATHISTORY FAILED");
	}
});

//---------------------------------------
it("BLANK.COMPOSE", function() {
	UIALogger.logStart("BLANK.COMPOSE");

	app.navigationBar().rightButton().tap();
	Wait(Win.tableViews()[0].buttons()[1], 3);
	Screenshot(num++);


	if (Win.tableViews()[0].buttons()[1].checkIsValid()) {
		UIALogger.logPass("BLANK.COMPOSE PASSED");
	}
	else {
		UIALogger.logFail("BLANK.COMPOSE FAILED");
	}
});
//---------------------------------------
it("COMPOSE.SEARCH.NO RESULTS", function() {
	UIALogger.logStart("COMPOSE.SEARCH.NO RESULTS");

	Win.tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString("zzzzz\n");
	Wait(Win.tableViews()[0].buttons()[1], 1);
	Screenshot(num++);


	if (Win.tableViews()[0].buttons()[1].checkIsValid()) {
		UIALogger.logPass("COMPOSE.SEARCH.NORESULTS PASSED");
	}
	else {
		UIALogger.logFail("COMPOSE.SEARCH.NO RESULTS FAILED");
	}

target.frontMostApp().tabBar().buttons()[0].tap();
target.delay(1);
});
//---------------------------------------
it("DELETE.SN", function() {
	UIALogger.logStart("DELETE.SN");

	app.navigationBar().buttons()[0].tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
	target.delay(1);
	Win.scrollViews()[0].buttons()["icon settings sn"].tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
	target.delay(1);
	Win.tableViews()[0].cells()[0].switches()[0].tap();
	target.delay(1);
	Win.tableViews()[0].cells()[0].buttons()[0].tap();
	target.delay(1);
	Screenshot(num++);
	app.actionSheet().cancelButton().tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
	target.delay(1);

	if (app.tabBar().buttons()["Banjo"].checkIsValid()) {
		UIALogger.logPass("DELETE.SN PASSED");
	}
	else {
		UIALogger.logFail("DELETE.SN FAILED");
	}

app.tabBar().buttons()["Banjo"].tap();
target.delay(1);
});

//---------------------------------------
it("BLANK.NOTIFICATIONS", function() {
	UIALogger.logStart("BLANK.NOTIFICATIONS");

	app.tabBar().buttons()[3].tap();
	Loading("NOTOIFICATIONS");
	Wait(Win.tableViews()[0].staticTexts()[0]);
	Screenshot(num++);

	if (Win.tableViews()[0].staticTexts()[0].checkIsValid()
		&& Win.tableViews()[0].staticTexts()[1].checkIsValid()
		&& Win.tableViews()[0].buttons()["facebook icon normal"].checkIsValid()
		&& Win.tableViews()[0].buttons()["google plus icon normal"].checkIsValid()
		&& Win.tableViews()[0].buttons()["instagram icon normal"].checkIsValid()
		&& Win.tableViews()[0].buttons()["foursquare icon normal"].checkIsValid()
		&& Win.tableViews()[0].buttons()["linked in icon normal"].checkIsValid()
		&& Win.tableViews()[0].buttons()["twitter icon normal"].checkIsValid()) {
		UIALogger.logPass("BLANK.NOTIFICATIONS");
	}
	else {
		UIALogger.logFail("BLANK.NOTIFICATIONS");
	}
	
	app.tabBar().buttons()["Banjo"].tap();
	target.delay(1);
});

//---------------------------------------

});