import * as React from "react";
import * as ReactDOM from "react-dom";
import {BaseComponent} from "./@Shared/BaseComponent";
import Row from "./@Shared/ReactComponents/Row";

export function Start_Popup() {
	//document.getElementById("popupBody").appendChild(document.createTextNode("Hi123"));

	class Popup extends BaseComponent<{}, {}> {
		toggler: HTMLInputElement;
		render() {
			return (
				<div>
					<div>Scientific notation toggler:</div>
					<Row>
						<input ref={c=>this.toggler = c} type="text" defaultValue="" style={{flex: 1}}/>
						<button onClick={()=> {
							alert("Val: " + this.toggler.value);
						}}>
							Toggle
						</button>
					</Row>
				</div>
			);
		}
	}

	ReactDOM.render(<Popup/>, document.getElementById("popupBody"), null);
}