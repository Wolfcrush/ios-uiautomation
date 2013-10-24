describe("Banjo - Chat. Send a Photo & Text.", function() {

//---------------------------------------
it("COMPOSE.SEARCH", function() {

	app.tabBar().buttons()[2].tap();
	Loading("CHAT HISTORY");
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
	Loading("CHATROOM");
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
it("CHAT.SEND.PHOTO&TEXT", function() {
	UIALogger.logStart("CHAT.SEND.PHOTO&TEXT");

	Win.buttons()["icon camera normal"].tap();
	target.delay(2);
	
	if (app.actionSheet().buttons()[1].checkIsValid()) {
		target.delay(1);
		app.actionSheet().buttons()[1].tap();
		target.delay(2);
	}

	Win.tableViews()[0].cells()[0].tap();
	target.delay(1);
		
	var randomnum = parseInt(Math.random() * 4);
	Win.tableViews()[0].visibleCells()[1].images()[randomnum].tap();
	target.delay(1);
	Win.images()["PLCameraButtonBarBlack"].buttons()[1].tap();
	target.delay(1);
	Wait(Win.staticTexts()[0], 3);
		
	target.delay(2);
	Win.textViews()[0].tap();
	app.keyboard().typeString("Text");
	Screenshot(num++);

	Win.buttons()[2].tap();
	Wait(Win.tableViews()[0].cells()[0].buttons()[0], 3);
	Screenshot(num++, 4);
	
	while(Win.tableViews()[0].cells()[0].progressIndicators()[0].isVisible()) {
		target.delay(2);
	}
	
	Win.tableViews()[0].cells()[0].buttons()[0].tap();
	Screenshot(num++, 3);

	app.navigationBar().leftButton().tap();

	if (Win.tableViews()[0].cells()[0].secureTextFields()[0].checkIsValid()
		&& Win.tableViews()[0].cells()[0].buttons()[0].checkIsValid()) {
		UIALogger.logPass("CHAT.SEND.PHOTO&TEXT PASSED");
	}
	else {
		UIALogger.logFail("CHAT.SEND.PHOTO&TEXT FAILED");
		throw new Error("CHAT.SEND.PHOTO&TEXT FAILED");
	}
});

//---------------------------------------
it("DELETE.CHATROOM", function() {
	UIALogger.logStart("DELETE.CHATROOM");
	app.navigationBar().leftButton().tap();
	target.delay(1);
	app.navigationBar().leftButton().tap();
	target.delay(1);
	
//	app.tabBar().buttons()[0].tap();
//	target.delay(1);
//	app.tabBar().buttons()[2].tap();
//	target.delay(2);

	var nm = 0;
	var maxnm = 10;
	while ((!Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user2_name+"'").checkIsValid()) && (nm < maxnm)) {
	Win.tableViews()[0].dragInsideWithOptions({startOffset:{x:0.1, y:0.1}, endOffset:{x:0.1, y:0.8}, duration:1.0});
	nm++;
	target.delay(2);
	}

	while (Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user2_name+"'").checkIsValid()) {
		var del="no";
		while(del=="no") {
			if (Win.tableViews()[0].cells()[0].buttons()[1].checkIsValid()) {
				del="yes";
				Screenshot(num++);
				Win.tableViews()[0].cells()[0].buttons()[1].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
				target.delay(4);
				break;
			}
			Win.tableViews()[0].cells()[0].staticTexts()[0].dragInsideWithOptions({startOffset:{x:0.1, y:0.5}, endOffset:{x:0.9, y:0.5}, duration:3});
			target.delay(2);
		}
		Win.tableViews()[0].dragInsideWithOptions({startOffset:{x:0.1, y:0.1}, endOffset:{x:0.1, y:0.8}, duration:1.0});
		target.delay(2);
	}
	
	if (Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user2_name+"'").checkIsValid()) {
		UIALogger.logFail("DELETE.CHATROOM FAILED");
		throw new Error("DELETE.CHATROOM FAILED");
	}
	else {
		UIALogger.logPass("DELETE.CHATROOM PASSED");
	}

	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});