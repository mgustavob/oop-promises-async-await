// Object Oriented Programming

const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl",
};

const dogTwo = {
    name: "Rocco",
}

dogTwo.__proto__ =dog;

console.log(dog);
console.log(dogTwo);
console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

const myFirstCar = {
    brand: 'Toyota',
    wheels: 4,
    speed: "fast",

}

const mySecondCar = {
    brand: 'Mazda',
}
mySecondCar.__proto__ = myFirstCar;
console.log(myFirstCar);
console.log(mySecondCar);

const apartOne = {
    location: "Brooklyn",
    color: "red",
    rooms: 3
};
const apartTwo = {
    location: "Long Island",
    color: "white"
};
apartTwo.__proto__ = apartOne;
console.log(apartTwo);

// constructor Function

function User(name) {
    this.name = name;


}

let adam = new User('Adam');
let pete = new User('Pete');


console.log(adam.name);
console.log(pete.name);

function NBAPlayer (name, team, threePoinShooter) {
    this.name = name;
    this.team = team;
    this.threePoinShooter = threePoinShooter;
    this.intro = function() {
        console.log("Hi, my name is " + this.name);
    }
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
let lebron = new NBAPlayer('Lebron James', 'Lakers', true);
let james = new NBAPlayer('James Harden', 'Rockets', true);
console.log(steph);
console.log(steph.name);
steph.intro();

// function CarBrands (name, inUsa, type) {
//     this.name = name;
//     this.inUsa = inUsa;
//     this.type = type;
// }
// let tesla = new CarBrands ('Tesla', true, 'Electric');
// let peugeot = new CarBrands ('Peugeot', false, 'Gas');

class Car {
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;

    }
    drive() {
        console.log('Vroom');
    }
}

let tesla = new Car(2020, 'Tesla', 'Model S', 'red');
console.log(tesla);

class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;

    }
    intro () {
        console.log(`My name is ${this.name} and my user name is @${this.username} `)
    }
}

fetch('https://api.github.com/users/mgustavob')
.then(response => {
    return response.json();

})
.then(data => {
    console.log(data);
    let gitHubUrl = data.url;
    let gitHubUsername = data.login;
    let gitHubName = data.name;
    let martin = new GithubProfile(gitHubUsername, gitHubName, gitHubUrl)
    console.log(martin);
    martin.intro();

})
fetch('https://api.github.com/users/lizzwest')
.then(response => {
    return response.json();

})
.then(data => {
    console.log(data);
    let gitHubUrl = data.url;
    let gitHubUsername = data.login;
    let gitHubName = data.name;
    let lizz = new GithubProfile(gitHubUsername, gitHubName, gitHubUrl)
    console.log(lizz);
    lizz.intro();

})


let isMomHappy = true;

// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

willIGetNewPhone.then(result => {
    console.log(result);
})

async function printUsers() {
    const endpoint = 'http://jsonplaceholder.typicode.com/users'
    let users = await fetch(endpoint).then(res => res.json());
    console.log(users);
}

printUsers();


// set up fetch using await
// grab login name
// print login name

async function printFacebook() {
    let facebookEndpoint = 'https://api.github.com/users/facebook'
    let login = await fetch(facebookEndpoint).then(res => res.json());
    console.log(login);

}
