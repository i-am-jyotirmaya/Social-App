import React from "react";
import ListItemProps from "../../interfaces/props/ListItemProps";
import "./ListItem.scss";

const ListItem: React.FC<ListItemProps> = ({ title, subtitle }) => {
    return (
        <li className="list-item">
            <div className="list-item__title">{title}</div>
            <div className="list-item__subtitle">{subtitle}</div>
        </li>
    );
};

export default ListItem;
