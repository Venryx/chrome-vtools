import {Contains} from "./CH_Array";

export function TrimStart(s: string, ...chars: string[]) {
	// fix for if called by VDF (which has a different signature)
	//if (arguments[0] instanceof Array) chars = arguments[0];

	for (var iOfFirstToKeep = 0; iOfFirstToKeep < s.length && Contains(chars, s[iOfFirstToKeep]); iOfFirstToKeep++);
	return s.slice(iOfFirstToKeep, s.length);
};