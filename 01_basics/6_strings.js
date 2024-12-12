const name = "priyam"
const repoCount = 50

//outdated coding syntax; dont use in mordern days
// console.log(name + repoCount + " Value");

//modern syntax, better to use; it is called string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to define string
const gameName = new String('priyam-pm-com')

// console.log(gameName[0]);    //output = h
// console.log(gameName.__proto__); //output = {}


// console.log(gameName.length);    // output = 6
// console.log(gameName.toUpperCase()); //original value wont change
console.log(gameName.charAt(2));    // output = i
console.log(gameName.indexOf('y')); //output = 3

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://priyam.com/priyam%20mondal"

console.log(url.replace('%20', '-'))    //output = https://priyam.com/priyam-mondal

console.log(url.includes('sundar')) //output = false

console.log(gameName.split('-'));   //output = ['priyam','pm','com']