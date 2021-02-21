//@flow
import { PostActionTypes } from 'constants/PostActionTypes';

const initialState = {
	posts: [],
};

const PostsReducer = (state = initialState, action) => {
	const getHotPosts = () => {
		let posts = [];
		return { ...state, posts: posts };
	};

	switch (action.type) {
		case PostActionTypes.GET_TOP_10_HOT_POSTS:
			return getHotPosts();
		default:
			return state;
	}
};

export default PostsReducer;
