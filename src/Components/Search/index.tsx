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
		};
	}

	inputs$: Subject<any> = new Subject<any>();

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

	public render(): JSX.Element {
		return (
			<div className="search">
				<form onSubmit={this.handleSubmit}>
					<div className="search__input">
						<input
							type="text"
							name="search-text"
							onChange={this.handleChange}
						/>
						<button type="submit">
							<InstagramIcon className="icon" />
						</button>
					</div>

					<div className="search__sort">
						<select name="sort">
							<option>A1</option>
							<option>A2</option>
							<option>A3</option>
						</select>
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
