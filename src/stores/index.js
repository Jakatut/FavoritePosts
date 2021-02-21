//@flow
import { createStore, combineReducers } from 'redux';
import FavoritesReducer from 'reducers/FavoritesReducer';
import PostReducer from 'reducers/PostsReducer';

const rootReducer = combineReducers({favorites: FavoritesReducer, post: PostReducer})
const store = createStore(rootReducer);

export default store