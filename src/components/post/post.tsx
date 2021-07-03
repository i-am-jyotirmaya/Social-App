import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PostProps from "../../interfaces/props/PostProps";
import IconButton from "../icon-button/IconButton";

const Post: React.FC<PostProps> = ({ username, title, body, children }) => {
    return (
        <div className="feed__post">
            <div className="feed__post__username">{username}</div>
            {/* <hr className="feed__post__divider" /> */}

            <div className="feed__post__body">
                <div className="feed__post__body__title">{title}</div>
                <div className="feed__post__body__content">
                    {children && children}
                    {body}
                </div>
            </div>
            <div className="feed__post__footer">
                <IconButton icon={faHeart} />
                <IconButton icon={faComment} />
            </div>
        </div>
    );
};

export default Post;
