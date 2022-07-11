import { createElement, appendChildren, createItems } from './createElement.js';

const dessertImg = createElement(["img", "menu-img"]);
dessertImg.src = "./desserts.jpg";

const mealImg = createElement(["img", "menu-img"]);
mealImg.src = "./meal.jpg";

const beveragesImg = createElement(["img", "menu-img"]);
beveragesImg.src = "./beverages.jpg";

const desserts = [
    [`Gluten Free Chocolate Torte`,
    `Flourless Dark Chocolate Torte with Raspberry Coulis,
    Accompanied by Fresh Berries and Whipped Cream`],

    [`Bourbon Bread Pudding`,
    `Bourbon Soaked Cherries and Pears with Bourbon
    Caramel Sauce, Crème Anglaise, Candied Hazelnuts,
    with Cinnamon Ice Cream`],

    [`Strawberry Basil Cheesecake`,
    `Strawberry Basil Compote with Mascarpone Cheesecake
    on Graham Cracker and Almond Crust`],

    [`Vanilla Bean Crème Brûlée`,
    `Caramelized Custard, with Lord Bergamot and
    Vanilla Bean Shortbread Cookie, Fresh Seasonal Berries`]]

const meals = [
    [`Shrimp And Spring Pea Risotto`,
    `Asparagus puree, snap peas, maitake mushroom, prosciutto,
    pecorino Romano.`],

    [`Honey Fennel Rubbed Lamb`,
    `Rainbow chard, Yukon Gold mashed potatoes, demi-glace`],

    [`Braised Beef Short Ribs`,
    `Yukon Gold mashed potatoes, lemon garlic rainbow chard, demi-glace`],

    [`Pan Seared Scallops`,
    `Corn veloute, tri-colored cauliflower, fried leeks `]]

const beverages = [
    [`Scratch Margarita`,
    `El Jimador Silver Tequila, house margarita
    mix, fresh lime`],

    [`Moscow Mule`,
    `Smirnoff Vodka, ginger beer, fresh lime
    Superior Mojito`],

    [`Bacardi Superior Rum, fresh mint`,
    `fresh lime, soda`],

    [`Ultimate Lemon Drop`,
    `Absolut Citron Vodka, Caravella
    Limoncello, fresh lemon sour`]]



    const dessertItems = createElement(["div", "menu-items"], createItems(desserts));
    const mealItems = createElement(["div", "menu-items"], createItems(meals));
    const beverageItems = createElement(["div", "menu-items"], createItems(beverages));

const createMenu = function() {
    appendChildren([createElement(["div", "menu-heading", "Menu"]),
    createElement(["div", "menu-heading menu-side", "Desserts"]),
    dessertImg, dessertItems,
    createElement(["div", "menu-heading menu-side", "Meals"]),
    mealImg, mealItems,
    createElement(["div", "menu-heading menu-side", "Beverages"]),
    beveragesImg, beverageItems],
    document.querySelector(".main-container"));
}

export {
    createMenu
}
