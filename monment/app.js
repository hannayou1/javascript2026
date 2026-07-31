const a = 5;
const b = 2;
let myName = "nico";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);        

myName = "nana";
console.log("your new name is " + myName);

console.log("---------------------------------------------");

const amIFat = null;
let something;

console.log(amIFat);
console.log(something, amIFat);

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", ];

console.log(daysOfWeek[5]);

daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[1]);


const player = {
    name: "nico",
    points: 121212,
    handsome: false,
    fat: "little bit",
}

console.log(player);

player.fat = true;
player.lastName = "potato";
player.points = player.points + 15;

console.log(player);

console.log("hello my name is hanna")
console.log("hello my name is dal")
console.log("hello my name is green")


function sayHello() {
    console.log("hello11")
}

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

