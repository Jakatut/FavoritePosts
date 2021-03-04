//@flow
import {
    PostActionTypes
} from 'constants/PostActionTypes';

const getPostData = (payload) => {
    return { type: PostActionTypes.GET_POST_DATA, payload };
};


const PostActions = {
    getPostData,
};

export default PostActions;