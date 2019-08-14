//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import { MoviesActions } from '@Actions'
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IMovies } from '@Interfaces';
import { Layout } from '@Components';
//#endregion Interface Imports

class Movies extends React.Component<IMovies.IProps, IMovies.IState> {

	constructor(props: IMovies.IProps) {
		super(props);

		this.state = {
		};
	}

	public render(): JSX.Element {
		return (
			<Layout title="Popular Movies">
				Hello!
			</Layout>
		);
	}
}

const mapStateToProps = (state: IMovies.IState) => state;

const mapDispatchToProps = (dispatch: Dispatch) => (
	bindActionCreators(MoviesActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
