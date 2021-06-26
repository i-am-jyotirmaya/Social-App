import axios from "axios";
import { Post } from "../interfaces/post";
import { User } from "../interfaces/user";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const user = {
    getAllUsers: async () => {
        const response = await axios.get<User[]>(`${BASE_URL}/users`);
        const users = response.data;
        return users;
    },
    getUser: async (id: number) => {
        const response = await axios.get<User>(`${BASE_URL}/users/${id}`);
        const user = response.data;
        return user;
    },
};

export const post = {
    getPosts: async () => {
        const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
        const posts = response.data;
        return posts;
    },
};
