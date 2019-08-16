//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IDropDown } from '@Interfaces';
//#endregion Interface Imports

class DropDown extends React.Component<IDropDown.IProps, IDropDown.IState> {

	constructor(props: IDropDown.IProps) {
		super(props);

		this.state = {
		};
	}

	public render(): JSX.Element {
		return (
			<div className="DropDown">
				DropDown
			</div>
		);
	}
}


export default DropDown;
