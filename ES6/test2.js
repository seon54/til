const SETTING = {
    name: 'lucky lotto!',
    count: 6,
    maxNumber: 45
}


function getRandomNumber(maxNumber) {    
    const set = new Set();

    for(let i = 0; i < SETTING.count; i++) {
        set.add(Math.floor(Math.random() * maxNumber) + 1);
    }

    return console.log(set);
}

getRandomNumber(SETTING.maxNumber);
