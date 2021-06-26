import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { userReducer } from "./reducers/userReducer";
import rootSaga from "./rootSaga";

const reducers = combineReducers({
    user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
