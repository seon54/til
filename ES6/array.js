var data = [1, 2, undefined, NaN, null, ""];

data.forEach((value) => console.log(value));
console.log("--------------------")
//  배열에서는 for in 사용하지 않고 for of 사용
for (let idx in data) {
    console.log(data[idx]);
}
console.log("--------------------")
for(let value of data) {
    console.log(value);
}
console.log("--------------------")

//  Spread operator
let pre = ['apple', 'orange', 100];
let newData = [...pre];
console.log(pre === newData);

let data2 = [0, 1, 2, 3, ...pre, 4];
console.log(data2);

function sum(a, b, c) {
    return a+b+c;
}

let num = [100, 200, 300];

console.log(sum.apply(null, num));
console.log(sum(...num));

function addMark() {
    let newData = [];

    for(let i = 0; i < arguments.length; i++) {
        newData.push(arguments[i] + "!");
    }

    console.log(newData);

    let array1 = Array.from(arguments);
    let newData2 = array1.map((value) => {
        return value + '!'
    });

    console.log(newData2)
}

addMark(1,2,3,4,5,6,7,8,9);