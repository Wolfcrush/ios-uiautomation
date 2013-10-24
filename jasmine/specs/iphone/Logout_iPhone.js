describe("Banjo - Logout.", function() {

//---------------------------------------
	it("SETTINGS.LOGOUT", function() {

		app.navigationBar().buttons()[0].tap();
		target.delay(1);
		app.navigationBar().rightButton().tap();
		target.delay(1);
		Win.scrollViews()[0].buttons()["icon settings logout"].tap();
		Screenshot(num++, 1);
		app.actionSheet().buttons()[0].tap();
		target.delay(5);
	});
//---------------------------------------

});
