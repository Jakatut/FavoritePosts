//@flow
import { PostActionTypes } from 'constants/PostActionTypes';

const initialState = {
	results: [],
};

const PostsReducer = (state = initialState, action) => {
	const mapPostData = () => {
		return {
			...state,
			results: action.payload?.data?.children?.map((post) => {
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

	switch (action.type) {
		case PostActionTypes.MAP_POST_DATA:
			return mapPostData();
		default:
			return state;
	}
};

export default PostsReducer;
