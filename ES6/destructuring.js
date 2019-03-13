let data = ['abc', 'jenny', 'max', 'johnny'];
let [jisu,,jung] = data;
console.log(jisu, jung);

[,jisu,jung] = data;
console.log(jisu, jung);

let obj = {
    name : 'crong',
    nat : 'korea',
    age : 10
}

let { name, age} = obj;
console.log(name, age);

let { name: myName, age: myAge } = obj;
console.log(myName, myAge);

const news = [
    {
        "title": "sbs",
        "url" : "sbs url",
        "list" : [
            "list1",
            "list2",
            "list3",
            "list4"
        ]
    },
    {
        "title": "mbc",
        "url" : "mbc url",
        "list" : [
            "news1",
            "news2",
            "news3",
            "news4"
        ]
    }
]

/*
let [, mbc] = news;
let { title, url} = mbc;
console.log(mbc, title, url);
*/

let [, { title, url}] = news;
console.log(title);

function getNewsList([, {list}]) {
    console.log(list);
}

getNewsList(news);