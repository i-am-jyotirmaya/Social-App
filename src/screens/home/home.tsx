import React from "react";
import Feed from "../../components/feed/feed";
import Navbar from "../../components/navbar/Navbar";

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Feed />
        </React.Fragment>
    );
};

export default Home;
