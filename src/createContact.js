import { createElement, appendChildren, createItems } from './createElement.js';

const managerImg = createElement(["img", "contact-img"]);
managerImg.src = "./manager.jpg";

const juniorImg = createElement(["img", "contact-img"]);
juniorImg.src = "./junior.jpg";

const chefImg = createElement(["img", "contact-img"]);
chefImg.src = "./chef.jpg";

const manager = [
    [`About`,
    `Bill D. Gates has been working for 4 years traveling around the world and creating handsome recipes. He is the founder of Bill D. Gates cooperation for dweebs. If you want to taste his plate contact us now.`],

    [`Contact`,
    `Phone Number: 051-2427-2928
    Address: Touche Grass, Apartment 7, Mercury, USA`]]

const jManager = [
    [`About`,
    `Junior Jeff was the creator of the Ultimate Fighting Corporation before he realize his incompetency and figured working as a Junior manager would be an easier task.`],

    [`Contact`,
    `Phone Number: 051-2345-5478
    Address: Hansun Villa, Street # 2, Portland, USA`]]

const sChef = [
    [`About`,
    `Chef Katie worked as a butler for Bruce Wayne from Gotham City. She lost her job when Bruce went bankrupt. After doing a bunch of odd-jobs she finally decided to become a chef as it requires no skills`],

    [`Contact`,
    `Phone Number: 051-8754-3829
    Address: Gatsby Complex, Near Parliament House, Jupiter, USA`]]



    const managerItems = createElement(["div", "menu-items"], createItems(manager));
    const juniorItems = createElement(["div", "menu-items"], createItems(jManager));
    const chefItems = createElement(["div", "menu-items"], createItems(sChef));

const createContact = function() {
    appendChildren([createElement(["div", "menu-heading", "Menu"]),
    createElement(["div", "menu-heading menu-side", "Bill D. Gates"]),
    managerImg, managerItems,
    createElement(["div", "menu-heading menu-side", "Jeff Junior"]),
    juniorImg, juniorItems,
    createElement(["div", "menu-heading menu-side", "Katie Winston"]),
    chefImg, chefItems],
    document.querySelector(".main-container"));
}

export {
    createContact
}