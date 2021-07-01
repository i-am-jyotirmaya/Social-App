import SearchBar from "../search-bar/SearchBar";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav id="nav">
            <div className="navbar">
                <div id="logo">
                    <p>Social App</p>
                </div>
                <SearchBar />
                <div id="nav-container"></div>
            </div>
        </nav>
    );
};

export default Navbar;
