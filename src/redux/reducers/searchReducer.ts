import {
    SEARCH,
    SET_SEARCH_RESULTS,
} from "../../components/search-bar/actions";
import { AppAction } from "../../interfaces/action";
import { User } from "../../interfaces/user";

const initialState: {
    users: User[];
} = {
    users: [],
};

export const searchReducer = (state = initialState, action: AppAction<any>) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS:
            return { users: action.data as User[] };
        // case SEARCH:
        //     const searchResult = globalState.user.users.filter(
        //         (e) =>
        //             e.name.startsWith(action.data) ||
        //             e.username.startsWith(action.data)
        //     );
        //     return { users: searchResult };
        default:
            return state;
    }
};
