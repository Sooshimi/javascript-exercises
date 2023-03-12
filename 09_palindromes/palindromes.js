const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    let backwards = string.split("").reverse("").join("").replace(/[^a-z]/g, "");
    if (backwards === string) return true;
    else return false;
};

console.log(palindromes('racecar!'));

// Do not edit below this line
module.exports = palindromes;
