// import '../css/style.css';
import '../src/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('.appContainer'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);

// const navigationMenu = document.querySelector('.navigation-menu');
// const navigationMenuItems = document.querySelectorAll('.navigation-menu__item');
// const burger = document.querySelector('.header__burger');
// const navigation = document.querySelector('.menu-container');

// navigationMenu.addEventListener('click', (event) => {
//     const { target } = event;
//     const isNavButton = target.closest('.navigation-menu__item');
//     if (isNavButton) {
//         navigationMenuItems.forEach((item) => {
//             item.classList.remove('active');
//         });
//     }
//     isNavButton.classList.add('active');
// });

// burger.addEventListener('click', (event) => {
//     console.log(event);
//     navigation.classList.toggle('visible');
//     burger.classList.toggle('close');
//     document.body.classList.toggle('lock');
// });
