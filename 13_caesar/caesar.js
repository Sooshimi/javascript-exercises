const caesar = function (string, shift) {
    let array = string.split("");
    let newArray = array.map((char) => shiftChar(char, shift));
    return newArray.join("")
};

function shiftChar(char, shift) {
    const charCode = char.charCodeAt();
    if ((charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)) {
        let shiftedChar = charCode + shift;
        return String.fromCharCode(shiftedChar);
    }
    return char;
};

// Do not edit below this line
module.exports = caesar;
