//@flow
import { FavoriteActionTypes } from 'constants/FavoriteActionTypes';

const initialState = {
	ids: [],
	posts: [],
	opened: false,
};

const FavoritesReducer = (state = initialState, action) => {

	const addFavorite = () => {
		console.log('Adding favorite: ', action.payload);
		// Local storage only supports strings, convert json array to string.
		let favoritePosts = getFavoritePostsFromLocalStorage() ?? [];
        console.log('favoritePosts: ', favoritePosts);
		if (!favoritePosts.includes(action.payload)) {
			favoritePosts.push(action.payload);
		}
		setFavoritePostsInLocalStorage(favoritePosts);
		return {
			...state,
			ids: state.ids.concat(action.payload),
		};
	};

	const removeFavorite = () => {
		let favoritePosts = getFavoritePostsFromLocalStorage();
		favoritePosts = favoritePosts.filter((id) => {
			return id !== action.payload;
		});
		setFavoritePostsInLocalStorage(favoritePosts);
		return { ...state, ids: favoritePosts };
	};

	const getFavoriteIds = () => {
		// Local storage only supports strings, convert to array.
		let favoritePostIds = getFavoritePostsFromLocalStorage();

		return {
			...state,
			ids: favoritePostIds,
		};
	};

	const mapPostData = () => {
		return {
			...state,
			posts: action.payload?.data?.children?.map((post) => {
				return {
					id: 't3_' + post.data.id,
					title: post.data.title,
					author: post.data.author,
					upvotes: post.data.ups,
					created_utc: post.data.created_utc,
				};
			}),
		};
	};

	const clearFavorites = () => {
		localStorage.removeItem('favoritePosts');
		return { ...state, posts: [], ids: [] };
	};

	const toggleFavorites = () => {
		return { ...state, opened: !state.opened };
	};

	const getFavoritePostsFromLocalStorage = () => {
		return JSON.parse(localStorage.getItem('favoritePosts')) ?? [];
	};

	const setFavoritePostsInLocalStorage = (favoritePosts) => {
		localStorage.setItem('favoritePosts', JSON.stringify(favoritePosts));
	};

	switch (action.type) {
		case FavoriteActionTypes.ADD_FAVORITE:
			return addFavorite();
		case FavoriteActionTypes.REMOVE_FAVORITE:
			return removeFavorite();
		case FavoriteActionTypes.GET_FAVORITE_IDS:
			return getFavoriteIds();
		case FavoriteActionTypes.CLEAR_FAVORITES:
			return clearFavorites();
		case FavoriteActionTypes.TOGGLE_FAVORITES:
			return toggleFavorites();
		case FavoriteActionTypes.MAP_FAVORITE_POST_DATA:
			return mapPostData();
		default:
			break;
	}

	return state;
};

export default FavoritesReducer;
