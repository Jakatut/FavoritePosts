//@flow
import { PostActionTypes } from 'constants/PostActionTypes';

const initialState = {
	results: [],
    subreddit: '',
};

const PostsReducer = (state = initialState, action) => {
	const getPostData = () => {
		return {
			...state,
			results: action.payload?.data?.children?.map((post) => {
				return {
					id: 't3_' + post.data.id,
					title: post.data.title,
					author: post.data.author,
					upvotes: post.data.ups,
					created_utc: post.data.created_utc,
                    link: process.env.REACT_APP_REDDIT_API_URL + post.data.subreddit_name_prefixed + '/comments/' + post.data.id.replace('t3_', '') + '/' + post.data.title.replaceAll(' ', '_',),
                    thumbnail: post.data.thumbnail === 'self' || post.data.thumbnail === 'default' ? undefined : post.data.thumbnail,
				};
			}),
		};
	};

	switch (action.type) {
		case PostActionTypes.GET_POST_DATA:
			return getPostData();
		default:
			return state;
	}
};

export default PostsReducer;
