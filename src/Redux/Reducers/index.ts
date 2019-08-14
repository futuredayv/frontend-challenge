import { combineReducers } from 'redux';

import { MoviesReducer } from './movies';

import { HomeReducer } from './home';

export default combineReducers({
    movies: MoviesReducer,
	home: HomeReducer,
});
