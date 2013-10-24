describe("Banjo - Logout (Portrait)", function() {

//---------------------------------------
	it("SETTINGS.LOGOUT", function() {

	app.tabBar().buttons()[4].tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
		target.delay(1);
		Win.scrollViews()[0].buttons()["icon settings LG logout"].tap();
		Screenshot(num++, 1);
		Win.popover().actionSheet().buttons()[1].tap();
		target.delay(5);
	});
//---------------------------------------

});
