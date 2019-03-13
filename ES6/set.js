
// set : 중복없이 유일한 값을 저장할 때 사용. 이미 존재하는지 체크할 때 유용
let mySet = new Set();

mySet.add('harry');
mySet.add('john');
mySet.add('harry');

mySet.forEach((v) => console.log(v));

console.log((mySet.has('max')));

mySet.forEach((v) => console.log(v));

mySet.delete('harry');

mySet.forEach((v) => console.log(v));

// weakset : 참조를 가지고 있는 객체만 저장
// 객체 형태를 중복없이 저장할 때 유용
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = { arr, arr2 };
let ws = new WeakSet();

ws.add(arr);
// ws.add('str');
// ws.add(null);
// ws.add(1);
ws.add(function(){});
ws.add(arr2);
ws.add(obj);
console.log(ws);
arr = null;
console.log(ws);
console.log(ws.has(arr), ws.has(arr2));

