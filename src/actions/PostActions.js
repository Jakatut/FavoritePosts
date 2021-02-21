//@flow
import {
    PostActionTypes
} from 'constants/PostActionTypes';

const getTop10HotPosts = (payload) => {
    return { type: PostActionTypes.GET_TOP_10_HOT_POSTS, payload };
};

const PostActions = {
    getTop10HotPosts,
};

export default PostActions;