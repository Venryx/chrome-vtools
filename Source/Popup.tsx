import * as React from "react";
import * as ReactDOM from "react-dom";
import {BaseComponent} from "./@Shared/BaseComponent";
import Row from "./@Shared/ReactComponents/Row";

export function Start_Popup() {
	//document.getElementById("popupBody").appendChild(document.createTextNode("Hi123"));

	class Popup extends BaseComponent<{}, {}> {
		numberInput: HTMLInputElement;
		render() {
			return (
				<div>
					<div>Number helper:</div>
					<Row>
						<input ref={c=>this.numberInput = c} type="text" defaultValue="" style={{flex: 1}}/>
						<button onClick={()=> {
							let str = this.numberInput.value;
							/*let [, integerPart, fractionalPart, exponentPart] = str.match(/([0-9])+\.([0-9]+)e([-0-9]+)/);
							this.numberInput.value = newStr;*/
							let number = parseFloat(str.replace(/\,/g, ""));
							this.numberInput.value = number.toString();
						}} title="Remove scientific notation and commas">
							Simplify
						</button>
						<button onClick={()=> {
							let str = this.numberInput.value;
							if (str.includes(",")) {
								this.numberInput.value = str.replace(/\,/g, "");
							} else {
								let [_, integerPart, __, fractionalPart] = str.match(/([0-9]+)(\.([0-9]+))?/);
								let integerPart_new = parseInt(integerPart).toLocaleString("en"); // add commas to integer part
								this.numberInput.value = integerPart_new + (fractionalPart == null ? "" : `.${fractionalPart}`);
							}
						}} title="Toggle commas">
							Toggle commas
						</button>
					</Row>
				</div>
			);
		}
	}

	ReactDOM.render(<Popup/>, document.getElementById("popupBody"), null);
}