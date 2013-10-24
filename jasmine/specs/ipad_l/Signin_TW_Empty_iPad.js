describe("Banjo - Sign in (Landscape).", function() {

//---------------------------------------
it("TWITTER SIGNIN", function() {

if (Win.buttons()[0].checkIsValid()) {
	Screenshot(num++, 3);
	Win.buttons()[0].tap();
	}

Screenshot(num++);
Win.scrollViews()[0].buttons()[0].tap();

if (Win.buttons()[2].checkIsValid()) {
	Screenshot(num++, 1);
	Win.buttons()[2].tap();
	Win.scrollViews()[0].buttons()[0].tap();
}
target.delay(3);

var tw_sn="no";
while(tw_sn=="no") {
	if (Win.scrollViews()[0].webViews()[0].elements()[18].checkIsValid()) {
	tw_sn="yes";
	break;
	}
	app.navigationBar().leftButton().tap();
	Win.scrollViews()[0].buttons()[0].tap();
	target.delay(5);
}

UIALogger.logStart("TWITTER SIGNIN");

Wait(Win.scrollViews()[0].webViews()[0].elements()[18], 3)
Screenshot(num++);
Win.scrollViews()[0].webViews()[0].elements()[18].scrollToVisible();

Win.scrollViews()[0].webViews()[0].elements()[18].tap();
app.keyboard().typeString(user3_handle);
target.delay(2);
Win.scrollViews()[0].webViews()[0].elements()[19].tap();
target.delay(1);
app.keyboard().typeString(user3_psswd);
target.delay(1)
Win.scrollViews()[0].webViews()[0].buttons()[0].scrollToVisible();
Win.scrollViews()[0].webViews()[0].buttons()[0].tap();
//target.delay(10);
Wait(app.tabBar().buttons()[0], 3);

if (Win.staticTexts()[5].checkIsValid()) {
	Screenshot(num++);
	Win.staticTexts()[5].tap();
	target.delay(1);
	}

if (app.tabBar().buttons()[0].checkIsValid()) {
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