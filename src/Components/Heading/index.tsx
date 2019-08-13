//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IHeading } from '@Interfaces';
//#endregion Interface Imports

export class Heading extends React.Component<IHeading.IProps, IHeading.IState> {
	public render(): JSX.Element {
		return (
			<div className="heading">
				<div className="container">
					<div className="heading__text">{this.props.text}</div>
				</div>
			</div>
		);
	}
}
