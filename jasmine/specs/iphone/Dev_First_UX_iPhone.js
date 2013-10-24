describe("Banjo - First UX.", function() {

//---------------------------------------
it("DEV.FITRST.UX", function() {

	app.navigationBar().buttons()[0].tap();
	target.delay(1);
	app.navigationBar().rightButton().tap();
	target.delay(1);
	app.navigationBar().buttons()["DEV"].tap();
	target.delay(1);
	Win.tableViews()[0].cells()["First Time Experience"].tap();
	Screenshot(num++, 4);
	});
//---------------------------------------

});
