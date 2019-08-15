//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
import { InstagramIcon } from '../../Assets/icons';
//#endregion Local Imports

//#region Interface Imports
import { ISearch, IStore } from '@Interfaces';
//#endregion Interface Imports

class Search extends React.Component<ISearch.IProps, ISearch.IState> {
	constructor(props: ISearch.IProps) {
		super(props);

		this.state = {
			searchText: '',
			sortBy: 'Alphanumeric ASC',
			isDroppedDown: false,
		};
	}

	inputs$: Subject<any> = new Subject<any>();

	sortOptions = [
		{ name: 'Alphanumeric ASC', value: 'A_ASC' },
		{ name: 'Alphanumeric DESC', value: 'A_DESC' },
		{ name: 'Year ASC', value: 'Y_ASC' },
		{ name: 'Year DESC', value: 'Y_DESC' },
	];

	componentDidMount() {
		this.inputs$.pipe(debounceTime(300)).subscribe(console.log);
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.searchText);
	};

	handleChange = ({ target: { value } }) => {
		this.setState({ searchText: value });
		this.inputs$.next(value);
	};

	toggleDropDown = () => {
		const { isDroppedDown } = this.state;

		if (isDroppedDown) return;

		this.setState({ isDroppedDown: !isDroppedDown });
	};

	isSelected = sortOption => {
		sortOption === this.state.sortBy ? 'selected' : '';
	};

	renderDropDownList = () => {
		return this.sortOptions.map(({ name, value }, i) => (
			<div key={i} className={`dropdown__item ${this.isSelected(value)}`}>
				{name}
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
							onChange={this.handleChange}
						/>
						<button type="submit">
							<InstagramIcon className="icon" />
						</button>
					</div>

					<div
						className="search__sort shadow-radius-box"
						onClick={this.toggleDropDown}
					>
						<div className="sort__control">
							<div className="sort__control__selected">
								{this.state.sortBy}
							</div>
							<div className="sort__control__indicator">
								<InstagramIcon className="icon" />
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
