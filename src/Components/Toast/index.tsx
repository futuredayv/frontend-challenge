//#region Global Imports
import React from 'react';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { IToast } from '@Interfaces';
//#endregion Interface Imports

const quotes = [
	`“Frankly, my dear, I don't give a damn.” Gone With the Wind, 1939`,
	`“I'm going to make him an offer he can't refuse.” The Godfather, 1972`,
	`“Toto, I've got a feeling we're not in Kansas anymore.” The Wizard of Oz, 1939`,
	`“Here's looking at you, kid.” Casablanca, 1942`,
	`“Go ahead, make my day.” Sudden Impact, 1983`,
	`“May the Force be with you.” Star Wars, 1977`,
];

const getRandomQuote = () => {
	const random = Math.floor(Math.random() * quotes.length);
	return quotes[random];
};

export const Toast = ({ isLoading, err }: IToast.IProps): JSX.Element => (
	<div className="Toast">
		{isLoading ? <span className="loading">{getRandomQuote()}</span> : null}

		{err ? <span className="error">Oops! Something went wrong.</span> : null}
	</div>
);
