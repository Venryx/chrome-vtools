declare var chrome, require;

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
console.log("Context: " + ContextType[context]);

if (context == ContextType.Background) {
	require("./Background");
} else if (context == ContextType.OnPageLoad) {
	require("./OnPageLoad");
} else {
	require("./Popup");
}