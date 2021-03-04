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

const getFavoriteIds = (payload) => {
	return { type: FavoriteActionTypes.GET_FAVORITE_IDS, payload };
};

const clearFavorites = (payload) => {
	return { type: FavoriteActionTypes.CLEAR_FAVORITES, payload };
};

const toggleFavorites = (payload) => {
	return { type: FavoriteActionTypes.TOGGLE_FAVORITES, payload };
};

const getFavoritePostData = (payload) => {
    return {type: FavoriteActionTypes.GET_FAVORITE_POST_DATA, payload};
};

const FavoriteActions = {
    addFavorite,
    removeFavorite,
    getFavoriteIds,
    clearFavorites,
    toggleFavorites,
    getFavoritePostData,
};

export default FavoriteActions;