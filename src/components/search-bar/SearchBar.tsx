import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { motion } from "framer-motion";

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (
                e.target !== document.querySelector("#user-search-container") &&
                e.target !==
                    document.querySelector("#user-search-container>input") &&
                e.target !== document.querySelector("#user-search-suggestion")
            ) {
                setFocused(false);
            }
        };
        document.body.addEventListener("click", listener);
        return () => {
            document.body.removeEventListener("click", listener);
        };
    }, []);

    const handleInputFocused = () => {
        setFocused(true);
    };

    const handleCloseButton = () => {
        setValue("");
        setFocused(false);
    };

    const handleInput = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <div id="user-search-container">
            <input
                type="text"
                ref={inputRef}
                placeholder={focused ? "Search" : ""}
                onFocus={handleInputFocused}
                value={value}
                onInput={handleInput}
            />
            {!focused && !value && (
                <div className="placeholder">
                    <FontAwesomeIcon
                        className="placeholder__search-icon"
                        icon={faSearch}
                    />
                    <span>Search</span>
                </div>
            )}
            {focused && (
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
            )}
            {focused && (
                <FontAwesomeIcon
                    onClick={handleCloseButton}
                    className="close"
                    icon={faTimesCircle}
                />
            )}
            {focused && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{ duration: 0.1 }}
                    className="user-search-suggestion"
                    id="user-search-suggestion">
                    <div className="pointer"></div>
                </motion.div>
            )}
        </div>
    );
};

export default SearchBar;
