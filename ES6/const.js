function home() {
    var homename = 'my house';
    homename = 'your house';
    console.log(homename);  

    const name = 'John';
    // name = 'Jane';
    // console.log(name);       TypeError

    const list = ['apple', 'banana', 'peach'];
    list.push('peach');
    console.log(list);

    // list = 'melon';
    // console.log(list)        TypeError
    
}

home();

// immutable array
const list = ['orange', 'apple', 'banana'];
list2 = [].concat(list, 'banana');
list3 = [...list];
console.log(list === list2);
console.log(list === list3);