//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
import { SearchIcon, SortIcon } from '../../Assets/icons';
//#endregion Local Imports

//#region Interface Imports
import { ISearch, IStore } from '@Interfaces';
//#endregion Interface Imports

class Search extends React.Component<ISearch.IProps, ISearch.IState> {
	constructor(props: ISearch.IProps) {
		super(props);

		this.state = {
			searchText: '',
			sortBy: this.sortOptions[0],
			isDroppedDown: false,
		};
	}

	inputs$: Subject<any> = new Subject<any>();

	sortOptions: ISearch.ISortOption[] = [
		{ name: 'Alphanumeric ASC', value: 'A_ASC' },
		{ name: 'Alphanumeric DESC', value: 'A_DESC' },
		{ name: 'Year ASC', value: 'Y_ASC' },
		{ name: 'Year DESC', value: 'Y_DESC' },
	];

	componentDidMount() {
		this.inputs$.pipe(debounceTime(300)).subscribe(console.log);
	}

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(this.state.searchText);
	};

	handleChange = ({
		currentTarget: { value },
	}: React.FormEvent<HTMLInputElement>) => {
		this.setState({ searchText: value });
		this.inputs$.next(value);
	};

	toggleDropDown = () => {
		const { isDroppedDown } = this.state;

		// if (isDroppedDown) return;

		this.setState({ isDroppedDown: !isDroppedDown });
	};

	isSelected = (sortOption: ISearch.ISortOption) => {
		return sortOption == this.state.sortBy ? 'selected' : '';
	};

	isDroppedDown = () => (this.state.isDroppedDown ? 'dropped' : '');

	renderDropDownList = () => {
		return this.sortOptions.map((sortOption, i) => (
			<div
				key={i}
				className={`dropdown__item ${this.isSelected(sortOption)}`}
				onClick={() => this.setState({ sortBy: sortOption })}
			>
				{sortOption.name}
			</div>
		));
	};

	public render(): JSX.Element {
		return (
			<div className="search">
				<form onSubmit={this.handleSubmit}>
					<div className="search__input shadow-radius-box">
						<input
							type="text"
							name="search-text"
							placeholder="Looking for something specific ?"
							onChange={this.handleChange}
						/>
						<button type="submit">
							<SearchIcon className="icon" />
						</button>
					</div>

					<div className="search__sort shadow-radius-box">
						<div
							className={`sort__control ${this.isDroppedDown()}`}
							onClick={this.toggleDropDown}
						>
							<div className="sort__control__selected">
								{this.state.sortBy.name}
							</div>
							<div className="sort__control__indicator">
								<SortIcon className="icon" />
							</div>

							<div className="sort__control__dropdown shadow-radius-box">
								{this.renderDropDownList()}
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.search;

// const mapDispatchToProps = (dispatch: Dispatch) => (
// );

export default connect(mapStateToProps)(Search);
