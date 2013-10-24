// load dependencies
#import "ext/jasmine-uiautomation.js";
#import "ext/jasmine-reporters/ext/jasmine.js";
#import "reporter/jasmine.uiautomation_junit_reporter.js";
#import "ext/jasmine-main-thread.js"

// load test specs
#import "specs/ext/header.js";
#import "specs/ext/users.js";
#import "specs/ext/random_string.js";
#import "specs/ext/random_location.js"

// ---------- IPHONE ----------

if (model=="iPhone" || model=="iPod touch") {
// SIGNIN
#import "specs/iphone/Signin_TW_iPhone.js";
#import "specs/iphone/Home_iPhone.js";
// CHAT
#import "specs/iphone/Chat_Text_iPhone.js";
#import "specs/iphone/Chat_Photo_iPhone.js";
#import "specs/iphone/Chat_PhotoText_iPhone.js";
#import "specs/iphone/Chat_512_Limit_iPhone.js";
#import "specs/iphone/Chat_Link_iPhone.js";
#import "specs/iphone/Chat_Email_iPhone.js";
#import "specs/iphone/Chat_Options_iPhone.js";
// SOCIAL
#import "specs/iphone/Social_TW_Text_iPhone.js";
#import "specs/iphone/Social_TW_Photo_iPhone.js";
#import "specs/iphone/Social_TW_PhotoText_iPhone.js";
#import "specs/iphone/Social_FB_Place_iPhone.js";
#import "specs/iphone/Social_FB_Text_iPhone.js";
#import "specs/iphone/Social_FB_Photo_iPhone.js";
#import "specs/iphone/Social_FB_PhotoText_iPhone.js";
#import "specs/iphone/Social_FB_PhotoTextPlace_iPhone.js";
#import "specs/iphone/Social_FS_Place_iPhone.js";
#import "specs/iphone/Social_FS_Text_iPhone.js";
#import "specs/iphone/Social_FS_Photo_iPhone.js";
#import "specs/iphone/Social_FS_PhotoText_iPhone.js";
#import "specs/iphone/Social_LI_Text_iPhone.js";
#import "specs/iphone/Social_LI_Photo_iPhone.js";
#import "specs/iphone/Social_LI_PhotoText_iPhone.js";
#import "specs/iphone/Social_Suggest_SN_iPhone.js";
// SETTINGS
#import "specs/iphone/Edit_Profile_iPhone.js";
#import "specs/iphone/Settings_iPhone.js";
// LOGOUT
#import "specs/iphone/Logout_iPhone.js"

// EMPTY VIEWS
#import "specs/iphone/Signin_TW_Empty_iPhone.js";
#import "specs/iphone/Empty_Views_iPhone.js"

// DEV - FIRST UX
#import "specs/iphone/Dev_First_UX_iPhone.js"
}

jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter());
jasmine.getEnv().execute();