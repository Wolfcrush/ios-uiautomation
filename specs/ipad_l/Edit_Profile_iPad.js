describe("Banjo - Edit Profile (Landscape).", function() {

//---------------------------------------
it("SAVE.PROFILE.BLANK", function() {
	UIALogger.logStart("SAVE.PROFILE.BLANK");
	
	app.tabBar().buttons()[4].tap();
	target.delay(1);
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	
	Win.scrollViews()[0].textViews()[0].tap();
	Win.scrollViews()[0].textViews()[0].setValue("");
	Win.scrollViews()[0].textFields()[1].tap();
	Win.scrollViews()[0].textFields()[1].setValue("");
	Win.scrollViews()[0].textFields()[2].tap();
	Win.scrollViews()[0].textFields()[2].setValue("");
	app.navigationBar().buttons()[1].tap();
	Loading("SAVE PROFILE");
	
	if (app.tabBar().buttons()[0].checkIsValid()) {
		UIALogger.logPass("SAVE.PROFILE.BLANK PASSED");
	}
	else {
		UIALogger.logFail("SAVE.PROFILE.BLANK FAILED");
		throw new Error("SAVE.PROFILE.BLANK FAILED");
	}
	target.delay(1);
});
//---------------------------------------
it("EDIT.PROFILE.UI", function() {
	UIALogger.logStart("EDIT.PROFILE.UI");

	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	Screenshot(num++);

	if (Win.scrollViews()[0].buttons()[0].checkIsValid()
		&& Win.scrollViews()[0].staticTexts()[0].checkIsValid()
		&& Win.scrollViews()[0].textFields()[0].checkIsValid()
		&& Win.scrollViews()[0].staticTexts()[1].checkIsValid()
		&& Win.scrollViews()[0].staticTexts()[3].checkIsValid()
		&& Win.scrollViews()[0].staticTexts()["0/250"].checkIsValid()
		&& Win.scrollViews()[0].textViews()[0].checkIsValid()
		&& Win.scrollViews()[0].staticTexts()[4].checkIsValid()
		&& Win.scrollViews()[0].textFields()[1].checkIsValid()
		&& Win.scrollViews()[0].staticTexts()[5].checkIsValid()
		&& Win.scrollViews()[0].textFields()[2].checkIsValid()
		&& app.navigationBar().buttons()[1].checkIsValid()
		&& app.navigationBar().leftButton().checkIsValid()) {
		UIALogger.logPass("EDIT.PROFILE.UI PASSED");
	}
	else {
		UIALogger.logFail("EDIT.PROFILE.UI FAILED");
		throw new Error("EDIT.PROFILE.UI FAILED");
	}
});
//---------------------------------------
it("SAVE.PROFILE.PHOTO", function() {
	UIALogger.logStart("SAVE.PROFILE.PHOTO");
	
	Win.scrollViews()[0].buttons()[0].tap();
	target.delay(2);
	
	if (Win.popover().actionSheet().buttons()[2].checkIsValid()) {
		target.delay(1);
		Win.popover().actionSheet().buttons()[2].tap();
		target.delay(2);
	}

		Win.popover().tableViews()[0].cells()[0].tap();
		target.delay(1);
		
		var randomnum = parseInt(Math.random() * 4);
		Win.popover().tableViews()[0].visibleCells()[1].images()[randomnum].tapWithOptions({tapOffset:{x:0.5, y:0.5}, duration:0.3});
		target.delay(1);
		Win.popover().navigationBar().rightButton().tap();
		target.delay(1);
		Wait(Win.scrollViews()[0].buttons()[0], 3);
		Screenshot(num++);
	
	app.navigationBar().buttons()[1].tap();
	Loading("SAVE PROFILE");
	
	if (app.tabBar().buttons()[0].checkIsValid()) {
		UIALogger.logPass("SAVE.PROFILE.PHOTO PASSED");
	}
	else {
		UIALogger.logFail("SAVE.PROFILE.PHOTO FAILED");
		throw new Error("SAVE.PROFILE.PHOTO FAILED");
	}
	target.delay(1);
});
//---------------------------------------
it("SAVE.PROFILE.NAME", function() {
	UIALogger.logStart("SAVE.PROFILE.NAME");
	
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	
	Win.scrollViews()[0].textFields()[0].tap();
	Win.scrollViews()[0].textFields()[0].setValue("");
	Screenshot(num++, 1);
	Win.scrollViews()[0].textFields()[0].setValue("New Name");
	app.navigationBar().buttons()[1].tap();
	Loading("SAVE PROFILE");
	
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] 'New Name'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	var name = Win.scrollViews()[0].textFields()[0].value();
	target.delay(1);
	
	if (name == "New Name") {
		UIALogger.logPass("SAVE.PROFILE.NAME PASSED");
	}
	else {
		UIALogger.logFail("SAVE.PROFILE.NAME FAILED");
		throw new Error("SAVE.PROFILE.NAME FAILED");
	}
	
	Win.scrollViews()[0].textFields()[0].tap();
	Win.scrollViews()[0].textFields()[0].setValue("Robert Moore");
	app.navigationBar().buttons()[1].tap();
	Loading("SAVE PROFILE");
	target.delay(1);
});
//---------------------------------------
it("SAVE.PROFILE.BIO", function() {
	UIALogger.logStart("SAVE.PROFILE.BIO");
	
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	
	Win.scrollViews()[0].textViews()[0].tap();
	Win.scrollViews()[0].textViews()[0].setValue("My Bio");
	app.navigationBar().buttons()[1].tap();
	Loading("SAVE PROFILE");
	
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	var bio = Win.scrollViews()[0].textViews()[0].value();
	target.delay(1);
	
	if (bio == "My Bio") {
		UIALogger.logPass("SAVE.PROFILE.BIO PASSED");
	}
	else {
		UIALogger.logFail("SAVE.PROFILE.BIO FAILED");
		throw new Error("SAVE.PROFILE.BIO FAILED");
	}
	app.navigationBar().leftButton().tap();
	target.delay(1);
});
//---------------------------------------
it("SAVE.PROFILE.WEB", function() {
	UIALogger.logStart("SAVE.PROFILE.WEB");
	
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	
	Win.scrollViews()[0].textFields()[1].tap();
	Win.scrollViews()[0].textFields()[1].setValue("http://twitter.com/bermoor");
	app.navigationBar().buttons()[1].tap();
	Loading("SAVE PROFILE");
	
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	var web = Win.scrollViews()[0].textFields()[1].value();
	target.delay(1);
	
	if (web == "http://twitter.com/bermoor") {
		UIALogger.logPass("SAVE.PROFILE.WEB PASSED");
	}
	else {
		UIALogger.logFail("SAVE.PROFILE.WEB FAILED");
		throw new Error("SAVE.PROFILE.WEB FAILED");
	}
	app.navigationBar().leftButton().tap();
	target.delay(1);
});
//---------------------------------------
it("SAVE.PROFILE.EMAIL", function() {
	UIALogger.logStart("SAVE.PROFILE.EMAIL");
	
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	
	Win.scrollViews()[0].textFields()[2].tap();
	Win.scrollViews()[0].textFields()[2].setValue("bermoor@yahoo.com");
	app.navigationBar().buttons()[1].tap();
	Loading("SAVE PROFILE");
	
	Win.tableViews()[0].cells().firstWithPredicate("name contains[c] '"+user1_name+"'").buttons()[7].tap();
	Wait(Win.scrollViews()[0].buttons()[0]);
	var email = Win.scrollViews()[0].textFields()[2].value();
	target.delay(1);
	
	if (email == "bermoor@yahoo.com") {
		UIALogger.logPass("SAVE.PROFILE.EMAIL PASSED");
	}
	else {
		UIALogger.logFail("SAVE.PROFILE.EMAIL FAILED");
		throw new Error("SAVE.PROFILE.EMAIL FAILED");
	}
	target.delay(1);
});
//---------------------------------------
it("SAVE.PROFILE.WRONG.EMAIL", function() {
	UIALogger.logStart("SAVE.PROFILE.EMAIL");
	
	Win.scrollViews()[0].textFields()[2].tap();
	Win.scrollViews()[0].textFields()[2].setValue("WrongEmail");
	app.navigationBar().buttons()[1].tap();
	Screenshot(num++);
	
	if (target.frontMostApp().mainWindow().staticTexts()[0].checkIsValid()
		&& target.frontMostApp().mainWindow().staticTexts()[1].checkIsValid()
		&& target.frontMostApp().mainWindow().buttons()[2]) {
		UIALogger.logPass("SAVE.PROFILE.WRONG.EMAIL PASSED");
	}
	else {
		UIALogger.logFail("SAVE.PROFILE.WRONG.EMAIL FAILED");
		throw new Error("SAVE.PROFILE.WRONG.EMAIL FAILED");
	}
	target.frontMostApp().mainWindow().buttons()[2].tap();
	app.navigationBar().leftButton().tap();
	app.tabBar().buttons()[0].tap();
	target.delay(1);
});
//---------------------------------------

});