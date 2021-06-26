import { Action } from "redux";

export interface AppAction<T> extends Action<string> {
    data?: T;
}
