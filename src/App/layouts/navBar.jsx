import React, { useState, useEffect } from 'react';
import { menuItemsBottom, menuItemsSpecial, menuItemsTop } from '../api/menuItems';
import MenuList from '../Components/common/navBar/menuList.jsx';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const { pathname } = useLocation();
    const [menuItems, setMenuItems] = useState();
    useEffect(() => {
        setMenuItems(
            [...document.querySelectorAll('.navigation-menu__item')].map((item) => {
                item.id === pathname.split('/')[1] ? item.classList.add('active') : item.classList.remove('active');
                return item;
            })
        );
    }, []);

    const handleClick = (id) => {
        setMenuItems(
            [...menuItems].map((item) => {
                item.id === id ? item.classList.add('active') : item.classList.remove('active');
                return item;
            })
        );
    };

    return (
        <div className="menu-container">
            <nav className="navigation">
                <ul className="navigation-menu">
                    <MenuList menuItems={menuItemsTop} onItemClick={handleClick} />
                    <MenuList menuItems={menuItemsSpecial} onItemClick={handleClick} />
                    <MenuList menuItems={menuItemsBottom} onItemClick={handleClick} />
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
