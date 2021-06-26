import { AppAction } from "../../interfaces/action";
import { User } from "../../interfaces/user";

const initialState: {
    users: User[];
} = {
    users: [],
};

export const userReducer = (state = initialState, action: AppAction<any>) => {
    switch (action.type) {
        default:
            return state;
    }
};
