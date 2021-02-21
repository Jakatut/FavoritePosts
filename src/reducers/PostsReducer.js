//@flow
import { PostActionTypes } from 'constants/PostActionTypes';

const initialState = {
	results: [],
};

const PostsReducer = (state = initialState, action) => {
	const mapPostData = () => {
		let newState = {
			...state,
			results: action.payload?.data?.children?.map((post) => {
				return {
					id: post.data.id,
					title: post.data.title,
					author: post.data.author,
					upvotes: post.data.ups,
					created_utc: post.data.created_utc,
				};
			}),
		};
		return newState;
	};

	switch (action.type) {
		case PostActionTypes.MAP_POST_DATA:
			return mapPostData();
		default:
			return state;
	}
};

export default PostsReducer;
