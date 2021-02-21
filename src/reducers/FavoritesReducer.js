//@flow
import { FavoriteActionTypes } from 'constants/FavoriteActionTypes';

const initialState = {
	posts: [],
	opened: false,
};

const FavoritesReducer = (state = initialState, action) => {
	const addFavorite = () => {
		// Local storage only supportsd strings, convert json array to string.
		let favoritePosts = getFavoritePostsFromLocalStorage();
		favoritePosts.push(action.payload);
        setFavoritePostsInLocalStorage(favoritePosts);
		return {
			...state,
			posts: state.posts.concat(action.payload),
		};
	};

	const removeFavorite = () => {
		let favoritePosts = getFavoritePostsFromLocalStorage();
		favoritePosts = favoritePosts.filter((id) => {
			return id !== action.payload;
		});
        setFavoritePostsInLocalStorage(favoritePosts);
		return { ...state, posts: favoritePosts };
	};

	const getFavorites = () => {
		// Local storage only supports strings, convert to array.
		let favoritePosts = getFavoritePostsFromLocalStorage();

		return {
			...state,
			posts: favoritePosts,
		};
	};

	const clearFavorites = () => {
		localStorage.removeItem('favoritePosts');
		return { ...state, posts: [] };
	};

	const toggleFavorites = () => {
		return { ...state, opened: !state.opened };
	};

	const getFavoritePostsFromLocalStorage = () => {
		return JSON.parse(localStorage.getItem('favoritePosts')) ?? [];
	};

    const setFavoritePostsInLocalStorage = (favoritePosts) => {
		localStorage.setItem('favoritePosts', JSON.stringify(favoritePosts));
    }

	switch (action.type) {
		case FavoriteActionTypes.ADD_FAVORITE:
			return addFavorite();
		case FavoriteActionTypes.REMOVE_FAVORITE:
			return removeFavorite();
		case FavoriteActionTypes.GET_FAVORITES:
			return getFavorites();
		case FavoriteActionTypes.CLEAR_FAVORITES:
			return clearFavorites();
		case FavoriteActionTypes.TOGGLE_FAVORITES:
			return toggleFavorites();
		default:
			break;
	}

	return state;
};

export default FavoritesReducer;
