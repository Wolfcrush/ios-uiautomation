describe("Banjo - Blank Screens (Landscape).", function() {

//---------------------------------------
it("BLANK.CHATHISTORY", function() {
	UIALogger.logStart("BLANK.CHATHISTORY");

	app.tabBar().buttons()[2].tap();
	Wait(Win.tableViews()[0]);
	
	if (Win.staticTexts()[2].checkIsValid()) {
	Screenshot(num++);
	Win.staticTexts()[2].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
	target.delay(1);
	}
	
	Screenshot(num++);

	if (Win.tableViews()[0].checkIsValid()) {
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
	Wait(Win.popover().tableViews()[0].buttons()[1], 3);
	Screenshot(num++);


	if (Win.popover().tableViews()[0].buttons()[1].checkIsValid()) {
		UIALogger.logPass("BLANK.COMPOSE PASSED");
	}
	else {
		UIALogger.logFail("BLANK.COMPOSE FAILED");
	}
});

//---------------------------------------
it("COMPOSE.SEARCH.NO RESULTS", function() {
	UIALogger.logStart("COMPOSE.SEARCH.NO RESULTS");

	Win.popover().tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString("zzzzz\n");
	Wait(Win.popover().tableViews()[0].buttons()[1], 1);
	Screenshot(num++);


	if (Win.popover().tableViews()[0].buttons()[1].checkIsValid()) {
		UIALogger.logPass("COMPOSE.SEARCH.NORESULTS PASSED");
	}
	else {
		UIALogger.logFail("COMPOSE.SEARCH.NO RESULTS FAILED");
	}

app.navigationBar().rightButton().tap();
target.delay(1);
});
//---------------------------------------
it("DELETE.SN", function() {
	UIALogger.logStart("DELETE.SN");

	app.tabBar().buttons()[4].tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
	target.delay(1);
	Win.scrollViews()[0].buttons()["icon settings LG sn"].tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
	target.delay(1);
	Win.tableViews()[0].cells()[0].switches()[0].tap();
	target.delay(1);
	Win.tableViews()[0].cells()[0].buttons()[0].tap();
	target.delay(1);
	Screenshot(num++);
	target.tap({x:100.00, y:100.00});
	target.delay(1);
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.navigationBar().leftButton().tap();
	target.delay(1);
	app.navigationBar().leftButton().tap();

	if (Win.tableViews()[0].cells()[1].buttons()[0].checkIsValid()) {
		UIALogger.logPass("DELETE.SN PASSED");
	}
	else {
		UIALogger.logFail("DELETE.SN FAILED");
	}

app.tabBar().buttons()[0].tap();
target.delay(1);
});
//---------------------------------------

});