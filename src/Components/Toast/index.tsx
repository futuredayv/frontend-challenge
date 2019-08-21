//#region Global Imports
import * as React from 'react';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { IToast } from '@Interfaces';
//#endregion Interface Imports

const quotes = [
	{
		quote: "Frankly, my dear, I don't give a damn.",
		movie: 'Gone With the Wind',
		year: 1939,
	},
	{
		quote: "I'm going to make him an offer he can't refuse.",
		movie: 'The Godfather',
		year: 1972,
	},
	{
		quote: "Toto, I've got a feeling we're not in Kansas anymore.",
		movie: 'The Wizard of Oz',
		year: 1939,
	},
	{ quote: "Here's looking at you, kid.", movie: 'Casablanca', year: 1942 },
	{ quote: 'Go ahead, make my day.', movie: 'Sudden Impact', year: 1983 },
	{ quote: 'May the Force be with you.', movie: 'Star Wars', year: 1977 },
];

const getRandomQuote = (): JSX.Element => {
	const random = Math.floor(Math.random() * quotes.length);
	const { quote, movie, year } = quotes[random];
	return (
		<>
			<div className="quote">"{quote}"</div>
			<div className="movie">― {movie}</div>
			<div className="year">{year}</div>
		</>
	);
};

export const Toast = ({ isLoading, err }: IToast.IProps): JSX.Element => (
	<div className="toast">
		{(isLoading || err) && (
			<div className={`toast__container ${err && 'error'}`}>
				<h4>{isLoading ? 'Loading' : 'Error'}</h4>
				<div className="toast__container__text">
					{isLoading
						? getRandomQuote()
						: 'Oops! Something went wrong.'}
				</div>
			</div>
		)}
	</div>
);
