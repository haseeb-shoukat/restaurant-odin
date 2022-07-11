import { createElement, appendChildren } from './createElement.js';

const text1 = `Welcome to Billy's Diner, your number one source for delicious, fulfilling meals. We're dedicated to providing you the most unique, mouth-watering dishes, with an emphasis on freshness, uniqueness, and a powerful punch of flavors.`

const text2 = `Founded in 1992 by Grandmaster Bill Gates, Billy's Diner has come a long way from its beginnings in Minnesota. When Bill first started out, his passion for fresh, hearty meals drove him to start his own restaurant.`

const text3 =`We hope you enjoy our dishes as much as we enjoy preparing them for you. If you have any questions or comments, please don't hesitate to contact us.`

const image = createElement(["img", "about-img"]);
image.src = "./gates.jpg";

const createAbout = function() {

appendChildren([createElement(["div", "about-heading", "Our Story"]),
createElement(["p", "about-text", text1]),
createElement(["p", "about-text", text2]),
image,
createElement(["p", "about-text", text3]),
createElement(["img", "about-img"])], document.querySelector(".main-container"))

}

export {
    createAbout
};
