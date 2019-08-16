//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { ISearch, IStore } from '@Interfaces';
import { TextBox, DropDown } from '@Components';
//#endregion Interface Imports

class Search extends React.Component<ISearch.IProps, ISearch.IState> {
	constructor(props: ISearch.IProps) {
		super(props);

		this.state = {
			searchText: '',
			sortBy: ''
		};
	}

	sortOptions = [
		{ name: 'Alphanumeric ASC', value: 'A_ASC' },
		{ name: 'Alphanumeric DESC', value: 'A_DESC' },
		{ name: 'Year ASC', value: 'Y_ASC' },
		{ name: 'Year DESC', value: 'Y_DESC' },
	];

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(this.state);
	};

	public render(): JSX.Element {
		return (
			<div className="search">
				<form onSubmit={this.handleSubmit}>
					<TextBox
						debounce={300}
						minLength={3}
						onChange={searchText => this.setState({searchText})}
					/>

					<DropDown
						items={this.sortOptions}
						onChange={({value: sortBy}) => this.setState({sortBy})}
					/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.search;

// const mapDispatchToProps = (dispatch: Dispatch) => (
// );

export default connect(mapStateToProps)(Search);
