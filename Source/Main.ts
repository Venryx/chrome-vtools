import "./@Shared/General/Start_0";
import "./@Shared/General/ClassExtensions/CE";
import "./@Shared/General/Start_1";
import "./@Shared/General/Logging";
import "./@Shared/General/Assert";
import "./@Shared/General/Globals";

import {Start_Background} from "./Background";
import {Start_OnPageLoad} from "./OnPageLoad";
import {Start_Popup} from "./Popup";

//declare global { var chrome, require, React; }

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

if (context == ContextType.Background) {
	Start_Background();
} else if (context == ContextType.OnPageLoad) {
	Start_OnPageLoad();
} else {
	Start_Popup();
}