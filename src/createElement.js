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
        childrenArr.forEach(child => {
            item.appendChild(child);
        })
    };

    console.log(item)

    return item;
};

export {
    createElement
};