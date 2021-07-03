import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IconButtonProps from "../../interfaces/props/IconButtonProps";
import "./IconButton.scss";

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
    return (
        <button className="app-icon-button">
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

export default IconButton;
