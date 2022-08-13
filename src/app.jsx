import '../css/style.css';
import '../assets/fonts/ChunkFive-Regular.woff';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from './React app/App.jsx';

// import IMG_PROFILE from "../img/profile.png";
// import IMG_LOGO from "../img/logo-dreamkas.16498a91.svg";
const navigationMenu = document.querySelector('.navigation-menu');
const navigationMenuItems = document.querySelectorAll('.navigation-menu__item');
const burger = document.querySelector('.header__burger');
const navigation = document.querySelector('.menu-container');

navigationMenu.addEventListener('click', (event) => {
    const { target } = event;
    const isNavButton = target.closest('.navigation-menu__item');
    if (isNavButton) {
        navigationMenuItems.forEach((item) => {
            item.classList.remove('active');
        });
    }
    isNavButton.classList.add('active');
});

burger.addEventListener('click', (event) => {
    console.log(event);
    navigation.classList.toggle('visible');
    burger.classList.toggle('close');
    document.body.classList.toggle('lock');
});

const root = ReactDOM.createRoot(document.querySelector('.content-container'));
root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
