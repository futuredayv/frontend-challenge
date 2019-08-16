//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
import { SortIcon } from '../../Assets/icons';
//#endregion Local Imports

//#region Interface Imports
import { ISearch, IStore } from '@Interfaces';
import TextBox from '@Components/TextBox';
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

	sortOptions: ISearch.ISortOption[] = [
		{ name: 'Alphanumeric ASC', value: 'A_ASC' },
		{ name: 'Alphanumeric DESC', value: 'A_DESC' },
		{ name: 'Year ASC', value: 'Y_ASC' },
		{ name: 'Year DESC', value: 'Y_DESC' },
	];

	componentDidMount() {
		document.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
		document.addEventListener('click', this.handleOutsideClick);
	}

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(this.state.searchText);
	};

	handleChange = (e) => { console.log(e) }

	toggleDropDown = () => {
		const { isDroppedDown } = this.state;
		this.setState({ isDroppedDown: !isDroppedDown });
	};

	isSelected = (sortOption: ISearch.ISortOption) => {
		return sortOption == this.state.sortBy ? 'selected' : '';
	};

	setRef = node => (this.controlRef = node);

	handleOutsideClick = ({ target }) => {
		if (this.controlRef && !this.controlRef.contains(target)) {
			this.setState({ isDroppedDown: false });
		}
	};

	isDroppedDown = () => (this.state.isDroppedDown ? 'dropped' : '');

	renderDropDownList = () => {
		return this.sortOptions
			.filter(s => this.isSelected(s) === '')
			.map((sortOption, i) => (
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
					<TextBox
						debounce={1000}
						onChange={this.handleChange}
						minLength={3}
					/>

					<div className="search__sort shadow-radius-box">
						<div
							className={`sort__control ${this.isDroppedDown()}`}
							onClick={this.toggleDropDown}
							ref={this.setRef}
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
