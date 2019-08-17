//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { ISeries } from '@Interfaces';
//#endregion Interface Imports

class Series extends React.Component<ISeries.IProps, ISeries.IState> {

	constructor(props: ISeries.IProps) {
		super(props);

		this.state = {
		};
	}

	public render(): JSX.Element {
		return (
			<div className="Series">
				Series
			</div>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch: Dispatch) => (
);

export default connect(mapStateToProps, mapDispatchToProps)(Series);

