import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header__burger">
                <span></span>
            </div>
            <div className="header__logo"></div>
            <span className="header__text">Кабинет</span>
            <div className="header__icon"></div>
            <a href="" className="header__mail">
                sorrint@gmail.com
            </a>
        </header>
    );
};

export default Header;
