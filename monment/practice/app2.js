
function sayHello(nameOfPerson, age) {
    console.log("hello my name id"+ nameOfPerson+ "and I'm" + age)
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lyn", 21);

function plus(firstNumber , secondNumber) {
    console.log(firstNumber+secondNumber)
}

plus(8, 60);

function divide(a,b ){
    console.log(a/b);
}

plus(60,8);
divide(60,3);

const player = {
    name:"nico",
    sayHello2: function(otherPersonsName){
        console.log("hello2 "+ otherPersonsName + " nice meet you")
    }
}

console.log(player.name);
player.sayHello2("lynn");
player.sayHello2("haha");



const toBuy = ["potato", "pizza", "banana"]

console.log(toBuy);
toBuy[2] = "water";

console.log(toBuy);

toBuy.push("meet"); // 추가하기

console.log(toBuy);


const player02 = {
    name:"Nico",
    age:89,
}

player02.name = "nicolas"

console.log(player02.name);

player02.sexy= "sonn";

console.log(player02, console)

function plus02 (a, b) {
    console.log(a+b);
}

plus02(5,10);
plus02(525555,88754510);


function minusFive (a) {
    console.log(a-5);
}

minusFive(7,10,12,123,4564,111,7);

const calculater = {
    add:function(a,b){
        return a+b;
    },

    minus:function(a,b){
        return a-b;
    },
    times : function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    }
,
    power : function(a,b){
        return a**b;
    }

}

const addResult=  calculater.add(99,10);
console.log(addResult);

const miusResult =  calculater.minus(addResult,1);

console.log("마이너스" + miusResult );

const timeResult =  calculater.times(5,10);
console.log('타임'+ timeResult);

const divideResult = calculater.divide(5,10);
console.log('나누기'+ divideResult);

calculater.power(5,10);


const age = 96;

function calculateKrAge(ageOfForeigner) {
   return ageOfForeigner+2;
  
}

const krAge = calculateKrAge(age);

console.log("한국나이는 : "+krAge)

