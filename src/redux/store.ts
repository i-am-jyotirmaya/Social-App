import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { feedWatcher } from "../components/feed/saga";
import { feedReducer } from "./reducers/feedReducer";
import { userReducer } from "./reducers/userReducer";
import rootSaga from "./rootSaga";

const reducers = combineReducers({
    user: userReducer,
    feed: feedReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(feedWatcher);

export default store;
