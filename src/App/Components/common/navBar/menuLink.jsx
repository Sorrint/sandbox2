import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const MenuLink = ({ item, ...rest }) => {
    const { onItemClick } = rest;
    return (
        <Link to={item.path} key={item.id}>
            <li className="navigation-menu__item" id={item.id} onClick={() => onItemClick(item.id)}>
                <span className="navigation-menu__link">{item.text}</span>
                <div className="bar-chart"> {parse(item.image)}</div>
            </li>
        </Link>
    );
};

export default MenuLink;
