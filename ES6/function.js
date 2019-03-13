// default parameter
function sum(value, size={value:1}) {
    return value * size.value;
}

console.log(sum(3, {value:3}));

function sum2(value, size = 1) {
    return value * size;
}

console.log(sum2(3));

// rest parameter
function checkNum() {
    const argArray = Array.prototype.slice.call(arguments);
    const result = argArray.every(v => typeof v === 'number');

    console.log(result);
}

function checkNum2(...argArray2) {    
    const result = argArray2.every(v => typeof v === 'number');

    console.log(result);
}
const check = checkNum(10, 2, 3, 5, "str");
const check2 = checkNum(10, 2, 3, 5, NaN);
const check3 = checkNum2(10, 2, 1);