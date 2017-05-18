import "./@Shared/General/Start_0";
//import "./@Shared/General/ClassExtensions/CE";
import "./@Shared/General/Start_1";
import "./@Shared/General/Logging";
import "./@Shared/General/Assert";
import "./@Shared/General/Globals";

/*import {Start_Background} from "./Background";
import {Start_OnPageLoad} from "./OnPageLoad";
import {Start_Popup} from "./Popup";*/

//declare global { var chrome, require, React; }
declare global { var require; }

enum ContextType {
	Background,
	OnPageLoad,
	Popup
}
let context: ContextType;
if (document.getElementById("popupBody")) {
	context = ContextType.Popup;
//chrome-extension://dhonnlmgopabknkjigoinmnpbaniagph/_generated_background_page.html"
} else if (window.location.href.startsWith("chrome-extension://")) {
	context = ContextType.Background;
} else {
	context = ContextType.OnPageLoad;
}
//console.log("Context: " + ContextType[context]);

// use require, for faster startup (saves ~50ms, from on-page-load startup-time -- probably because it doesn't use react)
if (context == ContextType.Background) {
	require("./Background").Start_Background();
} else if (context == ContextType.OnPageLoad) {
	require("./OnPageLoad").Start_OnPageLoad();
} else {
	require("./Popup").Start_Popup();
}