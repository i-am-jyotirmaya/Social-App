import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Feed from "../../components/feed/feed";
import Navbar from "../../components/navbar/Navbar";
import { useAppSelector } from "../../redux/utils";
import { getUsers } from "./actions";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    const allUsers = useAppSelector((state) => state.user.users);
    return (
        <React.Fragment>
            {allUsers.length ? (
                <>
                    <Navbar />
                    <Feed />
                </>
            ) : (
                <span>loading...</span>
            )}
        </React.Fragment>
    );
};

export default Home;
