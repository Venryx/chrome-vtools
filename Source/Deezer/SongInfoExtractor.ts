export function ExtractSongInfoFromPage() {
	g.chrome.tabs.getSelected(null, function(tab) {
		g.chrome.tabs.sendMessage(tab.id, {text: "get_song_info"}, data=> {
			if (data == null) {
				alert("Failed to get song info.");
				return;
			}
			try {
				CopyText(data);
				//alert("Text copied!\n\n" + data);
			} catch (e) {
				alert("Error: " + e.stack);
			}
		});
	});

	/*var json = document.body.outerHTML.match(/\{.*PRODUCT_TRACK_ID.*\}/);

	alert("background page data:" + g.chrome.extension.getBackgroundPage().test1);

	alert("Text copied!\n\n" + document.body.outerHTML);
	CopyText(json);*/
}

var note, note2;

//declare var $;
function CopyText(text) {
	/*
	//var note = $(`<input type="text">`).appendTo("body");
	var note = document.createElement("textarea");
	document.body.appendChild(note);
	note.innerHTML = text;

	note.focus();
	var range = document.createRange();
	range.setStart(note, 0);
	range.setEnd(note, 1);
	//range.setEnd(note2, 0);

	//range.setEnd(e("notesEnder"), 0); // adds one extra new-line; that's okay, right?
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);

	document.execCommand("copy");*/

	(document as any).oncopy = function(event) {
		event.clipboardData.setData("text/plain", text);
		event.preventDefault();
		(document as any).oncopy = null;
		//alert(`Text copied!\n\n${text}`);
		//alert(`Text copied! (${text})`);
		Notify(`Text copied! (${text.length})`)
	};
	(document as any).execCommand("copy", false, null);
}

function Notify(text) {
	var note = document.createElement("div");
	document.body.appendChild(note);
	note.innerHTML = text;
	setTimeout(()=> {
		note.remove();
	}, 3000);
}