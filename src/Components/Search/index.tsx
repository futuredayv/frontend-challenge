//#region Global Imports
import React, { useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, last } from 'rxjs/operators';
//#endregion Global Imports
import './style.scss';
import { InstagramIcon } from '../../Assets/icons';

//#region Interface Imports
import { ISearch } from '@Interfaces';
//#endregion Interface Imports

export const Search = (props: ISearch.IProps): JSX.Element => {
	const [state, setState] = useState({ searchText: '' });

	const inputs$ = new BehaviorSubject<any>('');

	const unsubscribe = inputs$.pipe(debounceTime(1000)).subscribe(console.log);

	const handleSubmit = event => {
		event.preventDefault();
		inputs$.next(['submit', state.searchText]);
	};

	const handleChange = ({ target: { value } }) => {
		setState({ searchText: value });
		inputs$.next(['change', value]);
	};

	return (
		<div className="search">
			<div className="search__input">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="search-text"
						value={state.searchText}
						onChange={handleChange}
					/>
					<button>
						<InstagramIcon className="icon" />
					</button>
				</form>
			</div>

			<div className="search__sort" />
		</div>
	);
};
