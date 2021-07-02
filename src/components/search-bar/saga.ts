import { put, takeLatest } from "redux-saga/effects";
import store from "../../redux/store";
import { SEARCH, setSearchResults } from "./actions";

export const searchSagas = [takeLatest(SEARCH, handleUserSearch)];

export function* handleUserSearch(action: any): any {
    try {
        if (action.data === "") {
            yield put(setSearchResults([]));
        } else {
            const response = store
                .getState()
                .user.users.filter(
                    (e) =>
                        e.name
                            .toLowerCase()
                            .includes(action.data.toLowerCase()) ||
                        e.username
                            .toLowerCase()
                            .includes(action.data.toLowerCase())
                );
            yield put(setSearchResults(response));
        }
    } catch (error) {
        console.log(error);
    }
}
