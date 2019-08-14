//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IMovies } from '@Interfaces';
//#endregion Interface Imports

class Movies extends React.Component<IMovies.IProps, IMovies.IState> {

	constructor(props: IMovies.IProps) {
		super(props);

		this.state = {
		};
	}

	public render(): JSX.Element {
		return (
			<div className="Movies">
				Movies
			</div>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch: Dispatch) => (
);

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

