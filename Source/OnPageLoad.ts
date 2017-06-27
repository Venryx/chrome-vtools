/*s.Process2 = function() {
	if (window.location.href.indexOf("drive.google.com") != -1)
		//$(".k-v-ta-za-Aa").on("keypress", function(data, event)
		//$(".a-v-hc-m").each(function()
		//$(".k-v-ta-za-Aa").each(function()
		//$("img[src~=\"://drive.google.com/thumbnail?id=\"]").each(function()
		$("span:contains(.png)").each(function() {
			//var control = $(this);
			var control = $(this).parent().parent().parent().parent();
			if (!control[0].processed) {
				control[0].processed = true;
				control.click(function(event) {
					if (event.ctrlKey && event.shiftKey) {
						/*var loc = location.href.toString();
						var startPos = loc.indexOf("folders/") + "folders/".length;
						var folderID = loc.substring(startPos, loc.indexOf("/", startPos));
						var fileName = control.find(".k-ta-P-x").text();
						location.href = "http://www.googledrive.com/host/" + folderID + "/" + fileName;*#/
						
						var imgElementsWithSrc = control.find("img[src]");
						var src;
						for (var i in imgElementsWithSrc)
							if ($(imgElementsWithSrc[i]).attr("src").startsWith("https://drive.google.com/thumbnail?id=")) {
								src = $(imgElementsWithSrc[i]).attr("src"); //control.find(".k-v-ta-za-Aa").attr("src");
								break;
							}
						//var src = control.attr("src");
						var startPos = src.indexOf("id=") + "id=".length;
						var fileID = src.substring(startPos, src.indexOf("&authuser=", startPos));
						//location.href = "http://www.googledrive.com/host/" + fileID;
						window.open("http://www.googledrive.com/host/" + fileID, "_blank");
						//chrome.tabs.create({url: "http://www.googledrive.com/host/" + fileID});
					}
				});
			}
		});
};
function ToVString(date, useUTCTimeZone) {
	useUTCTimeZone = useUTCTimeZone != null ? useUTCTimeZone : false;
	if (!useUTCTimeZone)
		date = new Date(date.getTime() + (1000 * 60 * 60 * -(date.getTimezoneOffset() / 60))); // offset timezone different
	return date.toISOString().replace("T", " ").replace(/\..+/g, "");
};*/

// startup
// ==========

/*$(function() {
	/*s.Process1();
	setTimeout(s.Process1, 500);*#/
	
	s.Process2();
	setTimeout(s.Process2, 1000);
	setTimeout(s.Process2, 3000);
	setTimeout(s.Process2, 5000);
	setTimeout(s.Process2, 10000);
});*/

/*chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
	/*if (tab.url.indexOf("http://translate.google.hu/") > -1 && 
		changeInfo.url === undefined){
	chrome.tabs.executeScript(tabId, {file: "program.js"} );
	}*#/
	if (changeInfo.url == null) // if page was refreshed
	s.Process2();
});*/

/*chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.action == 'open_dialog_box')
		alert("Message recieved!");
});*/

//declare var $;
export function Start_OnPageLoad() {
	/*window.addEventListener("load", ()=> {
		var json = document.head.outerHTML.match(/\{.*PRODUCT_TRACK_ID.*\}/);
		if (json) {
			g.chrome.tabs.getSelected(null, function(tab) {
				g.chrome.tabs.sendMessage(tab.id, { action: "song_info_received" }, function(response) {
					alert("Response:" + response);
				});
			});
		}
	});*/

	g.chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
		if (msg.text === "get_song_info") {
			//if (window.location.hostname != "www.deezer.com") return;

			var match = document.head.outerHTML.match(/\{.*PRODUCT_TRACK_ID.*\}/);
			var json = match ? match[0] : null;
			// multiple OnPageLoad instances are running, so only send if has data
			if (json) {
				let message = window.location.href + "\n\n\n==========\n\n\n" + json;
				sendResponse(message);
			}
		}
	});
}