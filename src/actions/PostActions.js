//@flow
import {
    PostActionTypes
} from 'constants/PostActionTypes';

const mapPostData = (payload) => {
    return { type: PostActionTypes.MAP_POST_DATA, payload };
};

const PostActions = {
    mapPostData,
};

export default PostActions;