import "./Globals"; // fake/empty import, so this module is correctly seen as module (rather than raw js script)

export function E(...objExtends: any[]) {
    var result = {};
    for (var extend of objExtends)
        result.Extend(extend);
	return result;
	//return StyleSheet.create(result);
}
g.Extend({E}); declare global { function E(...objExtends: any[]); }

export function Global() {}