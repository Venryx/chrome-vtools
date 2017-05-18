/*chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	//if (tab.url.indexOf("http://translate.google.hu/") > -1 && changeInfo.url === undefined)
	//	chrome.tabs.executeScript(tabId, {file: "program.js"});

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		//chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
		chrome.tabs.sendMessage("hi", {action: "open_dialog_box"}, function(response) {});  
	});
});*/

/*'use strict';
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.webNavigation.getAllFrames({
        tabId: tab.id,
    }, function(details) {
        if (chrome.runtime.lastError) {
            alert('Error: ' + chrome.runtime.lastError.message);
            return;
        }
        for (var i = 0; i < details.length; ++i) {
            var frame = details[i];
            // The top-level frame has frame ID 0.
            if (frame.frameId === 0) {
                alert('Tab info:\n' +
                      'PID: ' + frame.processId + '\n' +
                      'URL: ' + frame.url);
                return; // There is only one frame with ID 0.
            }
        }
        alert('The top-level frame was not found!');
    });
});*/

declare var chrome;
export function Start_Background() {
	chrome.commands.onCommand.addListener(function(command) {
		if (command == "killTab") {
			chrome.tabs.query(
				{currentWindow: true, active: true},
				function(tabs) {
					//alert("TabID:" + tabs[0].id);
					chrome.processes.getProcessIdForTab(tabs[0].id, function(processID) {
						//alert("ProcessID:" + processID);
						chrome.processes.terminate(processID, function(status) {
							//alert("Success:" + status);
						});
					});
				}
			);
		}
	});
}