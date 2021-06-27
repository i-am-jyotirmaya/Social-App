import { call, put, takeLatest } from "redux-saga/effects";
import { Post } from "../../interfaces/post";
import { post } from "../../network-requests/requests";
import { GET_POSTS, setPosts } from "./actions";

export function* feedWatcher() {
    yield takeLatest(GET_POSTS, handleGetPosts);
}

export function* handleGetPosts(action: any): any {
    try {
        const response = yield call(post.getPosts);
        yield put(setPosts(response));
    } catch (error) {
        console.error(error);
    }
}
