import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post as PostType } from "../../interfaces/post";
import { useAppSelector } from "../../redux/utils";
import Post from "../post/post";
import Spinner from "../spinner/spinner";
import { getPosts } from "./actions";
import "./feed.scss";

const Feed = () => {
    const postList = useSelector(
        (state: any) => state.feed.posts
    ) as PostType[];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const searchResults = useAppSelector((state) => state.user.users);

    return (
        <div className="feed">
            {postList.length ? (
                postList.map((e) => (
                    <Post
                        key={e.id}
                        username={(() =>
                            searchResults.find((el) => el.id === e.userId)
                                ?.username || e.userId.toString())()}
                        title={e.title}
                        body={e.body}
                    />
                ))
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default Feed;
