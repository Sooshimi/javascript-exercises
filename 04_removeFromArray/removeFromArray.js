const removeFromArray = function(array, ...args) {
    const newArray = [];

    array.forEach((item) => {
        const i = array.indexOf(item);
        if (!args.includes(item)) {
            newArray.push(array[i]);
        }
    });
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
