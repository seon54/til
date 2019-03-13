// ES6 Class
function Health(name) {
    this.name = name;

}

Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요");
}

const h = new Health('Jackson');
h.showHealth();

class Health2 {
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth() {
        console.log('안녕하세요 ' + this.name);
    }
}

const h2 = new Health2('May');
h2.showHealth();
console.log(toString.call(Health2));        // Function

// Object assign
const healthObj = {
   "name" : "Tim"
}

const myHealth = Object.create(healthObj);
myHealth.healthTime = 3;
myHealth.name = 'Jim';
console.log('myHealth => ', myHealth);
console.log('healthObj => ', healthObj);

const myHealth2 = Object.assign(healthObj);
myHealth2.healthTime = 4;
myHealth2.name = 'John';
console.log('myHealth2 => ', myHealth2);
console.log('healthObj => ', healthObj);

const myHealth3 = Object.assign({}, healthObj, {
    "lastTime" : "3:20"
});
console.log('myHealth3 => ' , myHealth3);
console.log('healthObj => ', healthObj);
console.log(healthObj === myHealth, healthObj === myHealth2, healthObj === myHealth3);   // false true false

// setPrototypeOf
const obj = {
    show: function() {
        console.log('show function');
    },
    setTime: function(newTime) {
        this.time = newTime;
    }
}

const newObj = {
    name: 'Max',
    lastTime: "22:34"
};

const obj2 = Object.setPrototypeOf(newObj, obj);
console.log("newObj => ", newObj, toString.call(obj2));

const hObj = {
    showHealth: function() {
        console.log("운동시간 : " + this.time);
    },
    setTime: function(newTime) {
        this.time = newTime;
    }
}

const healthChildObj = {
    getAge: function() {
        return this.age;
    }
}

Object.setPrototypeOf(healthChildObj, hObj);

const childObj2 = Object.setPrototypeOf({
    age: 22
}, healthChildObj);

childObj2.setTime("10:22");
childObj2.showHealth();

console.log(childObj2);

console.log(childObj2.__proto__, childObj2.__proto__.__proto__);