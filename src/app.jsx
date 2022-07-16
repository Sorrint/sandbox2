import "../css/style.css";
import React, {Component} from "react";
import ReactDOM from "react-dom/client";
import App from "./React app/App.jsx";

// import IMG_PROFILE from "../img/profile.png";
// import IMG_LOGO from "../img/logo-dreamkas.16498a91.svg";
const navigationMenu = document.querySelector(".navigation__menu");
const navigationMenuItems = document.querySelectorAll(".navigation__menu_item");
const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".menu-container");

navigationMenu.addEventListener("click", (event) => {
  const {target} = event;
  const isNavButton = target.closest(".navigation__menu_item");
  if (isNavButton) {
    navigationMenuItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
  isNavButton.classList.add("active");
});

burger.addEventListener("click", (event) => {
  console.log(event);
  navigation.classList.toggle("visible");
  burger.classList.toggle("close");
  document.body.classList.toggle("lock");
});



const root = ReactDOM.createRoot(document.querySelector(".eventContainer"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
