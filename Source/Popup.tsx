import * as React from "react";
import * as ReactDOM from "react-dom";
import {BaseComponent} from "./Helpers/BaseComponent";

//document.getElementById("popupBody").appendChild(document.createTextNode("Hi123"));

class Popup extends BaseComponent<{}, {}> {
	render() {
		return (
			<div>
				<div>Hi there! React is working. : )</div>
			</div>
		);
	}
}

ReactDOM.render(<Popup/>, document.getElementById("popupBody"), null);