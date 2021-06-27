import { SET_POSTS } from "../../components/feed/actions";
import { AppAction } from "../../interfaces/action";
import { Post } from "../../interfaces/post";

const initialState: {
    posts: Post[];
} = {
    posts: [],
};

export const feedReducer = (state = initialState, action: AppAction<any>) => {
    switch (action.type) {
        case SET_POSTS:
            return { posts: action.data };
        default:
            return state;
    }
};
