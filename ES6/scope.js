var name = 'global var';

function home() {
    var homevar = 'homevar';

    for (let i = 0; i < 100; i++) {
        console.log(i);     // 0부터 99까지 출력
    }
    console.log(i);         // Reference Error

    if (true) {
        let myif = "myif";

        console.log(myif);  // myif 출력
    }

    console.log(myif);      // Reference Error
}

home();     