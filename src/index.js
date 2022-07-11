import { createElement, appendChildren } from './createElement.js';
import { createAbout } from './createAbout.js';
import { createMenu } from './createMenu.js';
import { createContact } from './createContact.js';

const content = document.querySelector("#content");


const navItemsChildren = [
    createElement(["div", "nav-item selected", "About"]),
    createElement(["div", "nav-item", "Menu"]),
    createElement(["div", "nav-item", "Contact"])
]

const navBarChildren = [
    createElement(["div", "main-heading", "Billy's Diner"]),
    createElement(["div", "nav-items"], navItemsChildren)
]

const navBar = createElement(["div", "nav-bar"], 
    navBarChildren);

const mainContainer = createElement(["div", "main-container"]);

const footer = createElement(["div", "footer"]);
footer.innerHTML =  `Copyright © 2022, <a href="https://github.com/haseeb-shoukat"> haseeb-shoukat <i class="fa fa-github fa-lg" aria-hidden="true"></i></a>`


appendChildren([navBar, mainContainer, footer], content);

const navItems = document.querySelectorAll(".nav-item");

createAbout();

navItems.forEach(item => {
    item.addEventListener("click", e => {
        let selected = document.querySelector(".selected");
        if (item === selected) return;

        mainContainer.innerHTML = "";
        selected.classList.remove("selected");
        item.classList.add("selected");

        if (item.textContent === "About") {
            createAbout();
        }
        else if (item.textContent === "Menu") {
            createMenu();
        }
        else {
            createContact();
        }
    });
});





