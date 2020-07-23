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
