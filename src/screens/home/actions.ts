import { AppAction } from "../../interfaces/action";
import { User } from "../../interfaces/user";

export const GET_USERS = "get_users";
export const SET_USERS = "set_users";

export const getUsers = (): AppAction<any> => ({ type: GET_USERS });
export const setUsers = (users: User[]): AppAction<User[]> => ({
    type: SET_USERS,
    data: users,
});
