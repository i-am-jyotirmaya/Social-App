import { faHome, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
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
                <div id="nav-container">
                    <div className="inner">
                        <NavLink
                            className="button"
                            to="/"
                            activeClassName="active">
                            <FontAwesomeIcon icon={faHome} />
                        </NavLink>
                        <NavLink className="button" to="/albums">
                            <FontAwesomeIcon icon={faImages} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
