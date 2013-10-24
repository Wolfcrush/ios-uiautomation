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

// ---------- IPAD ----------
if (model=="iPad" || model=="iPad Simulator") {

// LANDSCAPE
#import "specs/ipad_l/Landscape.js";
// SIGNIN
#import "specs/ipad_l/Signin_TW_iPad.js";
#import "specs/ipad_l/Home_iPad.js";
// SOCIAL
#import "specs/ipad_l/Social_TW_Text_iPad.js";
#import "specs/ipad_l/Social_TW_Photo_iPad.js";
#import "specs/ipad_l/Social_TW_PhotoText_iPad.js";
#import "specs/ipad_l/Social_FB_Place_iPad.js";
#import "specs/ipad_l/Social_FB_Text_iPad.js";
#import "specs/ipad_l/Social_FB_Photo_iPad.js";
#import "specs/ipad_l/Social_FB_PhotoText_iPad.js";
#import "specs/ipad_l/Social_FB_PhotoTextPlace_iPad.js";
#import "specs/ipad_l/Social_FS_Place_iPad.js";
#import "specs/ipad_l/Social_FS_Text_iPad.js";
#import "specs/ipad_l/Social_FS_Photo_iPad.js";
#import "specs/ipad_l/Social_FS_PhotoText_iPad.js";
#import "specs/ipad_l/Social_LI_Text_iPad.js";
#import "specs/ipad_l/Social_LI_Photo_iPad.js";
#import "specs/ipad_l/Social_LI_PhotoText_iPad.js";
#import "specs/ipad_l/Social_Suggest_SN_iPad.js";
// SETTINGS
#import "specs/ipad_l/Edit_Profile_iPad.js"
// LOGOUT
#import "specs/ipad_l/Logout_iPad.js";

// EMPTY VIEWS
#import "specs/ipad_l/Signin_TW_Empty_iPad.js";
#import "specs/ipad_l/Empty_Views_iPad.js";
// LOGOUT
#import "specs/ipad_l/Logout_Empty_iPad.js";

// PORTRAIT
#import "specs/ipad_p/Portrait.js";
// SIGNIN
#import "specs/ipad_p/Signin_TW_iPad.js";
#import "specs/ipad_p/Home_iPad.js";
// SOCIAL
#import "specs/ipad_p/Social_TW_Text_iPad.js";
#import "specs/ipad_p/Social_TW_Photo_iPad.js";
#import "specs/ipad_p/Social_TW_PhotoText_iPad.js";
#import "specs/ipad_p/Social_FB_Place_iPad.js";
#import "specs/ipad_p/Social_FB_Text_iPad.js";
#import "specs/ipad_p/Social_FB_Photo_iPad.js";
#import "specs/ipad_p/Social_FB_PhotoText_iPad.js";
#import "specs/ipad_p/Social_FB_PhotoTextPlace_iPad.js";
#import "specs/ipad_p/Social_FS_Place_iPad.js";
#import "specs/ipad_p/Social_FS_Text_iPad.js";
#import "specs/ipad_p/Social_FS_Photo_iPad.js";
#import "specs/ipad_p/Social_FS_PhotoText_iPad.js";
#import "specs/ipad_p/Social_LI_Text_iPad.js";
#import "specs/ipad_p/Social_LI_Photo_iPad.js";
#import "specs/ipad_p/Social_LI_PhotoText_iPad.js";
#import "specs/ipad_p/Social_Suggest_SN_iPad.js";
// SETTINGS
#import "specs/ipad_p/Edit_Profile_iPad.js"
// LOGOUT
#import "specs/ipad_p/Logout_Empty_iPad.js";

// EMPTY VIEWS
#import "specs/ipad_p/Signin_TW_Empty_iPad.js";
#import "specs/ipad_p/Empty_Views_iPad.js";
// DEV - FIRST UX
#import "specs/ipad_p/Dev_First_UX_iPad.js";

}

jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter());
jasmine.getEnv().execute();