//map & weakmap
let wm = new WeakMap();
let myFunc = function() {};

wm.set(myFunc, 0);

console.log(wm);

let cnt = 0;
for(let i = 0; i < 10; i++) {
    cnt = wm.get(myFunc);       // get value of MyFunc
    cnt ++;
    wm.set(myFunc, cnt);
}

console.log(wm.get(myFunc));
myFunc = null;
console.log(wm.get(myFunc));    // undefined
console.log(wm.has(myFunc));    // false

//////////////////////////////////////////////////////////////

function Area(height, width) {
    this.height = height;
    this.width = width;
}

Area.prototype.getArea = function() {
    return this.height * this.width;
}

let myarea = new Area(20, 10);
console.log(myarea.getArea(), myarea.height);

const wm2 = new WeakMap();

function Area2(height, width) {
    wm2.set(this, {height, width});
}

Area2.prototype.getArea2 = function() {
    const {height, width} = wm2.get(this);
    return height * width;
}

let myarea2 = new Area2(2, 5);
console.log(myarea2.getArea2(), myarea2.width);