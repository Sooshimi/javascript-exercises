const fibonacci = function(num) {
    const count = Number(num);
    if (count < 0 ) return "OOPS";
    let a = 0; // prev term in current seq
    let b = 1; // term in current seq
    for (let i = 1; i < count; i++) {
        let ahead = b;
        b = a + b;
        a = ahead;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
