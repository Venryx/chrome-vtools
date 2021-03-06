import {LogError} from "./Logging";
import {TrimStart} from "./ClassHelpers/CH_String";

//if (!hotReloading) {
//g.onerror = function(message: string, filePath: string, line: number, column: number, error: Error) {
/*g.addEventListener("error", e=> {
	let {message, filename: filePath, lineno: line, colno: column, error} = e as {message: string, filename: string, lineno: number, colno: number, error: Error};
	/*LogError(`JS) ${message} (at ${filePath}:${line}:${column})
Stack) ${error.stack}`);*#/
	// sentry already picks up errors that make it here; so don't send it to sentry again
	if (error != null) {
		HandleError(error, false, false);
	} else {
		HandleError({stack: filePath + ":" + line + ":" + column, toString: ()=>message} as any, false, false);
	}
});
g.addEventListener("unhandledrejection", e=>{
	//console.error(`Unhandled rejection (promise: `, e.promise, `, reason: `, e.reason, `).`);
	HandleError(e.reason);
});
g.addEventListener("onrejectionhandled", e=>{
	//console.error(`Unhandled rejection (promise: `, e.promise, `, reason: `, e.reason, `).`);
	HandleError(e.reason);
});

export function HandleError(error: Error, fatal = false, recordWithSentry = true) {
	let message = TrimStart((error.message || error.toString()).replace(/\r/g, ""), "\n");
	/*let stackWithoutMessage = (
		error.stack && error.message && error.stack.Contains(error.message)
			? error.stack.replace(error.message, "")
			: error.stack || ""
	).TrimStart("\r", "\n");*#/
	let stack = TrimStart((error.stack || "").replace(/\r/g, ""), "\n");

	//alert("An error occurred: " + error);
	let errorStr = "";
	if (!message.startsWith("Assert failed) "))
		errorStr += `An error has occurred: `;
	if (!stack.includes(message))
		errorStr += message;
	errorStr += (errorStr.length ? "\n" : "") + stack;
	if (fatal)
		errorStr += "\n[fatal]";
	LogError(errorStr);

	/*if (recordWithSentry) {
		Raven.captureException(error);
	}*#/

	//store.dispatch(new ACTNotificationMessageAdd(new NotificationMessage(errorStr)));
}*/

//static GetStackTraceStr(stackTrace?: string, sourceStackTrace?: boolean);
export function GetStackTraceStr(sourceStackTrace?: boolean);
//@((()=> { if (g.onclick == null) g.onclick = ()=>console.log(V.GetStackTraceStr()); }) as any)
export function GetStackTraceStr(...args) {
	var stackTrace: string, sourceStackTrace = true;
	if (typeof args[0] == "string") [stackTrace, sourceStackTrace] = args;
	else [sourceStackTrace] = args;

	//stackTrace = stackTrace || new Error()[sourceStackTrace ? "Stack" : "stack"];
	//stackTrace = stackTrace || (sourceStackTrace ? StackTrace.get().then(stack=>stackTrace = stack.map(a=>a.toString()).join("\n")) : new Error().stack);
	stackTrace = stackTrace || new Error().stack;
	return stackTrace.substr(IndexOf_X(stackTrace, "\n", 1)); // remove "Error" line and first stack-frame (that of this method)
}

/** indexX is 0-based */
function IndexOf_X(selfStr: string, str: string, indexX: number) {
	var currentPos = -1;
	for (var i = 0; i <= indexX; i++) {
		var subIndex = selfStr.indexOf(str, currentPos + 1);
		if (subIndex == -1)
			return -1; // no such xth index
		currentPos = subIndex;
	}
	return currentPos;
}