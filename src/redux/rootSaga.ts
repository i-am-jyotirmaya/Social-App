import { all } from "redux-saga/effects";
import { feedWatcher } from "../components/feed/saga";

export default function* rootSaga() {
    yield all([feedWatcher]);
}
