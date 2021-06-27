import { AppAction } from "../../interfaces/action";
import { Post } from "../../interfaces/post";

export const GET_POSTS = "get_posts";
export const SET_POSTS = "set_posts";

export const getPosts = (): AppAction<undefined> => ({ type: GET_POSTS });
export const setPosts = (posts: Post[]): AppAction<Post[]> => ({
    type: SET_POSTS,
    data: posts,
});
