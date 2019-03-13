const name = "jay";
const age = 24;

const obj = {
    name, age
}

console.log(obj)

function getObj() {
    let name2 = 'max';

    const getName = () => { return name2; }

    const setName = (newName) => name2 = newName;

    const printName = () => console.log(name2);

    return { getName, setName }
}

const obj2 = getObj();
console.log(obj2);
console.log(obj2.setName('John'), obj2.getName())