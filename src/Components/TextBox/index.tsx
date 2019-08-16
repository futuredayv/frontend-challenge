//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { ITextBox } from '@Interfaces';
//#endregion Interface Imports

class TextBox extends React.Component<ITextBox.IProps, ITextBox.IState> {

	constructor(props: ITextBox.IProps) {
		super(props);

		this.state = {
		};
	}

	public render(): JSX.Element {
		return (
			<div className="TextBox">
				TextBox
			</div>
		);
	}
}


export default TextBox;
