describe("Banjo - Logout.", function() {

//---------------------------------------
	it("SETTINGS.LOGOUT", function() {

		app.navigationBar().leftButton().tap();
		target.delay(1);
		Win.tableViews()[0].cells()[5].tap();
		Screenshot(num++, 1);
		Win.tableViews()[1].cells()[8].tap();
		Screenshot(num++, 1);
		app.actionSheet().buttons()[0].tap();
		target.delay(5);
	});
//---------------------------------------

});
