const data = [
    {
        name: 'coffee-bean',
        order: true,
        items: ['americano', 'milk', 'green-tea']
    },
    {
        name: 'starbucks',
        order: false
    }
]

function fn(tags, name, items) {
    
    if (typeof items === "undefined") {
        items = "주문불가";
    }

    return (tags[0] + name + tags[1] + items + tags[2]);
}

const template = fn`<div>welcome ${data[0].name}</div> 주문가능: <div>${data[0].items}</div>`;
console.log(template);
console.log('----------------------------------------------');

data.forEach((v) => {
    const template2 = fn`<div>welcome ${v.name}</div> 주문가능: <div>${v.items}</div>`;
    console.log(template2);
})

