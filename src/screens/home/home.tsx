import React from "react";
import Feed from "../../components/feed/feed";

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <h1 style={{ textAlign: "center" }}>Feed</h1>
            <Feed />
        </React.Fragment>
    );
};

export default Home;
