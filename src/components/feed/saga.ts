import { call, put, takeLatest } from "redux-saga/effects";
import { post } from "../../network-requests/requests";
import { GET_POSTS, setPosts } from "./actions";

export const feedSagas = [takeLatest(GET_POSTS, handleGetPosts)];

export function* handleGetPosts(): any {
    try {
        const response = yield call(post.getPosts);
        yield put(setPosts(response));
    } catch (error) {
        console.error(error);
    }
}
