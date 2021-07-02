import { AppAction } from "../../interfaces/action";
import { User } from "../../interfaces/user";
import { GET_USERS, SET_USERS } from "../../screens/home/actions";

const initialState: {
    users: User[];
} = {
    users: [],
};

export const userReducer = (state = initialState, action: AppAction<any>) => {
    switch (action.type) {
        case SET_USERS:
            return { users: action.data as User[] };
        default:
            return state;
    }
};
