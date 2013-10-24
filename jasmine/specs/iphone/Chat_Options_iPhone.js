describe("Banjo - Chat. Options.", function() {

//---------------------------------------
it("COMPOSE.SEARCH", function() {

	app.tabBar().buttons()[2].tap();
	Loading("CHAT HISTORY")
	Screenshot(num++, 3);
	UIALogger.logStart("COMPOSE.SEARCH");

	app.navigationBar().rightButton().tap();
	Win.tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString(user2_search);
	Wait(Win.tableViews()[0].buttons()[1], 3);
	Screenshot(num++);

	if (Win.tableViews()[0].cells()[user2_name].checkIsValid()) {
		UIALogger.logPass("COMPOSE.SEARCH PASSED");
	}
	else {
		UIALogger.logFail("COMPOSE.SEARCH FAILED");
		throw new Error("COMPOSE.SEARCH FAILED");
	}
});

//---------------------------------------
it("CHATROOM.UI", function() {
	UIALogger.logStart("CHATROOM.UI");

	Win.tableViews()[0].cells()[0].tap();
	Loading("CHATROOM")
	Wait(Win.staticTexts()[0], 3);

	if (Win.buttons()["icon camera normal"].checkIsValid()
		&& Win.buttons()[2].checkIsValid()
		&& app.navigationBar().buttons()["navbar icon cogs"].checkIsValid()
		&& Win.textViews()[0].checkIsValid()) {
		UIALogger.logPass("CHATROOM.UI PASSED");
	}
	else {
		UIALogger.logFail("CHATROOM.UI FAILED");
		throw new Error("FAILED - Some UI Elements are missing.");
	}
});

//---------------------------------------
it("CHAT.OPTIONS.H1", function() {
	UIALogger.logStart("CHAT.OPTIONS.H1");
	
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.actionSheet().buttons()[0].tap();
	Wait(Win.tableViews()[0].buttons()["icon h1 settings normal"], 3);
	Screenshot(num++);

	if (Win.tableViews()[0].buttons()["icon h1 settings normal"].checkIsValid()) {
		UIALogger.logPass("CHAT.OPTIONS.H1 PASSED");
	}
	else {
		UIALogger.logFail("CHAT.OPTIONS.H1 FAILED");
		throw new Error("CHAT.OPTIONS.H1 FAILED");
	}
	app.navigationBar().leftButton().tap();
	target.delay(1);
});
//---------------------------------------
it("CHAT.OPTIONS.REPORT", function() {
	UIALogger.logStart("CHAT.OPTIONS.REPORT");
	
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.actionSheet().buttons()[2].tap();

	if (Win.buttons()[0].checkIsValid()
		&& Win.staticTexts()[0].checkIsValid()) {
		UIALogger.logPass("CHAT.OPTIONS.REPORT PASSED");
	}
	else {
		UIALogger.logFail("CHAT.OPTIONS.REPORT FAILED");
		throw new Error("CHAT.OPTIONS.REPORT FAILED");
	}
	target.delay(2);
});
//---------------------------------------
it("CHAT.OPTIONS.BLOCK", function() {
	UIALogger.logStart("CHAT.OPTIONS.BLOCK");
	
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.actionSheet().buttons()[1].tap();
	Screenshot(num++);
	target.delay(1);
	Win.buttons()[1].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.2});
	target.delay(1);
	
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.actionSheet().buttons()[1].tap();
	target.delay(1);
	Win.buttons()[2].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.2});
	target.delay(1);
	
	app.navigationBar().leftButton().tap();
	target.delay(1);
	app.tabBar().buttons()[0].tap();
	target.delay(1);
	
	app.navigationBar().buttons()[0].tap();
	app.navigationBar().rightButton().tap();
	Win.scrollViews()[0].buttons()["icon settings blocked"].tap();
	
	Win.tableViews()[0].dragInsideWithOptions({startOffset:{x:0.1, y:0.1}, endOffset:{x:0.1, y:0.8}, duration:1.0});
	target.delay(3);
	
	Screenshot(num++, 2);

	if (Win.tableViews()[0].cells()[user2_name].checkIsValid()) {
		UIALogger.logPass("CHAT.OPTIONS.BLOCK PASSED");
	}
	else {
		UIALogger.logFail("CHAT.OPTIONS.BLOCK FAILED");
		throw new Error("CHAT.OPTIONS.BLOCK FAILED");
	}
	
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------
it("CHAT.OPTIONS.UNBLOCK", function() {
	UIALogger.logStart("CHAT.OPTIONS.UNBLOCK");
	
	app.tabBar().buttons()[2].tap();
	app.tabBar().buttons()[2].tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
	Win.tableViews()[0].textFields()[0].tap();
	app.keyboard().typeString(user2_search);
	Wait(Win.tableViews()[0].buttons()[1], 3);
	Win.tableViews()[0].cells()[0].tap();
	Loading("CHATROOM");
	Wait(Win.staticTexts()[0], 3);
	
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.actionSheet().buttons()[0].tap();
	Wait(Win.tableViews()[0].buttons()["icon h1 settings normal"], 3);
	app.navigationBar().leftButton().tap();
	target.delay(1);
	
	app.navigationBar().rightButton().tap();
	app.actionSheet().buttons()[1].tap();
	target.delay(1);
	Win.buttons()[2].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
	
	app.navigationBar().leftButton().tap();
	target.delay(1);
	app.navigationBar().leftButton().tap();
	target.delay(1);
	app.tabBar().buttons()[0].tap();
	app.navigationBar().buttons()[0].tap();
	app.navigationBar().rightButton().tap();
	Win.scrollViews()[0].buttons()["icon settings blocked"].tap();
	
	Win.tableViews()[0].dragInsideWithOptions({startOffset:{x:0.1, y:0.1}, endOffset:{x:0.1, y:0.8}, duration:1.0});
	target.delay(3);
	
	Screenshot(num++, 2);

	if (Win.tableViews()[0].cells()["Aden Southers"].checkIsValid()) {
		UIALogger.logFail("CHAT.OPTIONS.UNBLOCK FAILED");
		throw new Error("CHAT.OPTIONS.UNBLOCK FAILED");
	}
	else {
		UIALogger.logPass("CHAT.OPTIONS.UNBLOCK PASSED");
	}
	
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});