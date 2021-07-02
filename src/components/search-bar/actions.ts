import { AppAction } from "../../interfaces/action";
import { User } from "../../interfaces/user";

export const SEARCH = "search";
export const SET_SEARCH_RESULTS = "set_search_results";

export const search = (searchText: string): AppAction<string> => ({
    type: SEARCH,
    data: searchText,
});
export const setSearchResults = (users: User[]): AppAction<User[]> => ({
    type: SET_SEARCH_RESULTS,
    data: users,
});
