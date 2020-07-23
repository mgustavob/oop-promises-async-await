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
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
let lebron = new NBAPlayer('Lebron James', 'Lakers', true);
console.log(steph);
console.log(steph.name);

function CarBrands (name, inUsa, type) {
    this.name = name;
    this.inUsa = inUsa;
    this.type = type;
}
let tesla = new CarBrands ('Tesla', true, 'Electric');
let peugeot = new CarBrands ('Peugeot', false, 'Gas');
