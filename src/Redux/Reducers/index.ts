import { combineReducers } from 'redux';

import { SeriesReducer } from './series';

import { SearchReducer } from './search';

import { MoviesReducer } from './movies';

import { HomeReducer } from './home';

export default combineReducers({
    series: SeriesReducer,
    search: SearchReducer,
    movies: MoviesReducer,
	home: HomeReducer,
});
