describe("Banjo - Sign in.", function() {

//---------------------------------------
it("TWITTER SIGNIN", function() {

//if (Win.buttons()[0].checkIsValid()) {
//	Screenshot(num++, 3);
//	Win.buttons()[0].tap();
//	}

Screenshot(num++);
Win.buttons()["Twitter"].tap();
target.delay(5);

var tw_sn="no";
while(tw_sn=="no") {
	if (Win.scrollViews()[0].webViews()[0].elements()[17].checkIsValid()) {
	tw_sn="yes";
	break;
	}
	app.navigationBar().leftButton().tap();
	Win.buttons()["Twitter"].tap();
	target.delay(5);
}

UIALogger.logStart("TWITTER SIGNIN");

Wait(Win.scrollViews()[0].webViews()[0].elements()[17], 3)
Screenshot(num++);
Win.scrollViews()[0].webViews()[0].elements()[17].scrollToVisible();

Win.scrollViews()[0].webViews()[0].elements()[17].tap();
app.keyboard().typeString(user1_handle);
target.delay(2);
Win.scrollViews()[0].webViews()[0].elements()[18].tap();
target.delay(1);
app.keyboard().typeString(user1_psswd);
target.delay(1)
Win.scrollViews()[0].webViews()[0].buttons()[0].scrollToVisible();
Win.scrollViews()[0].webViews()[0].buttons()[0].tap();
Wait(app.navigationBar().rightButton(), 3);

if (app.navigationBar().rightButton().checkIsValid()) {
	UIALogger.logPass("TWITTER SIGNIN PASSED");
	Screenshot(num++, 4);
	}
else {
	UIALogger.logFail("TWITTER SIGNIN FAILED");
	throw new Error("TWITTER SIGNIN FAILED");
	}
	});
//---------------------------------------

});