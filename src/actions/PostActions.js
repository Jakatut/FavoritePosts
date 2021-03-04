//@flow
import {
    PostActionTypes
} from 'constants/PostActionTypes';

const mapPostData = (payload) => {
    return { type: PostActionTypes.MAP_POST_DATA, payload };
};

const setSubreddit = (payload) => {
    return { type: PostActionTypes.SET_SUBREDDIT, payload };
};

const PostActions = {
    mapPostData,
    setSubreddit,
};

export default PostActions;