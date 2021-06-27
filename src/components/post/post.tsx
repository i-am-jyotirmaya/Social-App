import React from "react";
import PostProps from "../../interfaces/props/PostProps";

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
        </div>
    );
};

export default Post;
