const createElement = function(itemArr, childrenArr) {
    let itemTag = itemArr[0];
    let itemClasses = itemArr[1];
    let itemText = itemArr[2];

    let item = document.createElement(itemTag);

    if (itemClasses != undefined) {
        itemClasses = itemClasses.split(" ");
        itemClasses.forEach(c => {
            item.classList.add(c);
        });
    }
    if (itemText != undefined) {
        item.textContent = itemText;
    }

    if (childrenArr != undefined) {
        appendChildren(childrenArr, item);
    };

    return item;
};

const appendChildren = function(arr, item) {
    arr.forEach(child => {
        item.appendChild(child);
    })
}

const createItems = function(itemsArr) {
    let newItems = [];

    itemsArr.forEach(item => {
        let menuItem = createElement(["div", "menu-item"]);
        let heading = item[0];
        let text = item[1];

        menuItem.append(
        createElement(["div", "item-heading", heading]),
        createElement(["div", "item-text", text]))

        newItems.push(menuItem);
    })

    return newItems;
}

export {
    createElement,
    appendChildren,
    createItems

};