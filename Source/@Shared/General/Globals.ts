import "./Globals"; // fake/empty import, so this module is correctly seen as module (rather than raw js script)

export function E(...objExtends: any[]) {
    var result = {};
    for (var extend of objExtends)
        Object.assign(result, extend);
	return result;
	//return StyleSheet.create(result);
}
G({E}); declare global { function E(...objExtends: any[]); }

export function Global() {}