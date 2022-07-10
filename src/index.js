import { createElement } from './createElement.js';

const mainContainer = document.querySelector("#content");

const navItemsChildren = [
    createElement(["div", "nav-item selected", "Home"]),
    createElement(["div", "nav-item", "Menu"]),
    createElement(["div", "nav-item", "Contact"])
]

const navBarChildren = [
    createElement(["div", "main-heading", "Billy's Diner"]),
    createElement(["div", "nav-items"], navItemsChildren)
]

const navBar = createElement(["div", "nav-bar"], 
    navBarChildren);


mainContainer.appendChild(navBar);

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", e => {
        let selected = document.querySelector(".selected");
        selected.classList.remove("selected");

        item.classList.add("selected");
    });
});



