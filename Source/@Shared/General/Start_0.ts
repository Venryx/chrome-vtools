import "./Start_0"; // fake/empty import, so this module is correctly seen as module (rather than raw js script)

// special, early, definitely-safe codes
var g = window as any;
g.g = g; declare global { const g; }
/*var JQuery = require("../../../Source/Frame/JQuery/JQuery3.1.0"); // maybe temp; moved here for $().append testing
g.JQuery = JQuery;
g.jQuery = JQuery;
g.$ = JQuery;*/

declare global { function G(...globalHolders); } g.G = G;
function G(...globalHolders) {
	for (let globalHolder of globalHolders)
		g.Extend(globalHolder);
}