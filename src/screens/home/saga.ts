import { call, put, takeLatest } from "redux-saga/effects";
import { user } from "../../network-requests/requests";
import { GET_USERS, setUsers } from "./actions";

export const homeSagas = [takeLatest(GET_USERS, handleGetUsers)];

export function* handleGetUsers(): any {
    try {
        const users = yield call(user.getAllUsers);
        yield put(setUsers(users));
    } catch (error) {
        console.log(error);
    }
}
