import { all } from "redux-saga/effects";
import { feedSagas } from "../components/feed/saga";
import { searchSagas } from "../components/search-bar/saga";
import { homeSagas } from "../screens/home/saga";

export default function* rootSaga() {
    yield all([...feedSagas, ...searchSagas, ...homeSagas]);
}
