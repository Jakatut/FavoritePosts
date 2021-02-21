//@flow
import {
    FavoriteActionTypes
} from 'constants/FavoriteActionTypes';

const addFavorite = (payload) => {
	return { type: FavoriteActionTypes.ADD_FAVORITE, payload };
};

const removeFavorite = (payload) => {
	return { type: FavoriteActionTypes.REMOVE_FAVORITE, payload };
};

const getFavorites = (payload) => {
	return { type: FavoriteActionTypes.GET_FAVORITES, payload };
};

const clearFavorites = (payload) => {
	return { type: FavoriteActionTypes.CLEAR_FAVORITES, payload };
};

const toggleFavorites = (payload) => {
	return { type: FavoriteActionTypes.TOGGLE_FAVORITES, payload };
};

const FavoriteActions = {
    addFavorite,
    removeFavorite,
    getFavorites,
    clearFavorites,
    toggleFavorites,
};

export default FavoriteActions;