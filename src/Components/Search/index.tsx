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
import { SearchActions } from '@Actions';
import { SearchIcon } from '../../Assets/icons';
//#endregion Interface Imports

export class SearchComponent extends React.Component<
	ISearch.IProps,
	ISearch.IState
> {
	constructor(props: ISearch.IProps) {
		super(props);

		this.state = {
			searchActive: false,
		};
	}

	sortOptions = [
		{ name: 'Alphanumeric ASC', value: 'title_ASC' },
		{ name: 'Alphanumeric DESC', value: 'title_DESC' },
		{ name: 'Year ASC', value: 'releaseYear_ASC' },
		{ name: 'Year DESC', value: 'releaseYear_DESC' },
	];

	toggleSearch = () =>
		this.setState(state => ({ searchActive: !state.searchActive }));

	public render(): JSX.Element {
		const { UpdateFilterOptions } = this.props;
		const { searchActive } = this.state;

		return (
			<div className="search">
				<div
					className={`search__control ${
						searchActive ? 'active' : ''
					}`}
				>
					<form onSubmit={e => e.preventDefault()}>
						<TextBox
							debounce={300}
							minLength={3}
							onChange={search => UpdateFilterOptions({ search })}
						/>

						<DropDown
							items={this.sortOptions}
							onChange={({ value }) => {
								const [by, ordering] = value.split('_');
								UpdateFilterOptions({ sort: { by, ordering } });
							}}
						/>
					</form>
				</div>

				<div className="search__toggle" onClick={this.toggleSearch}>
					<SearchIcon className="icon" />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.search;

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(SearchActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SearchComponent);
