// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

// here we want String class have a function trueLength() that will return the length of a string without extra spaces
// we can do this using trim(), but we want this functionality in built to String object


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// here injecting in Object that is top level hierarchy
// so every child objects like function, array, string will have this "priyam" function by default
Object.prototype.priyam = function(){
    console.log(`priyam is present in all objects`);
}


heroPower.priyam();
myHeros.priyam();


Array.prototype.heyPriyam = function(){
    console.log(`{Priyam} says hello`);
}
myHeros.heyPriyam();
// this will give error
// because we assign heyPriyam function to Array only, not to Object
heroPower.heyPriyam();



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // using __proto__, one object inherits functionality of other objects
    // so now TASupport has all functionality of TeachingSupport
    __proto__: TeachingSupport
}

// same here, Teacher has access to all functionality of User
Teacher.__proto__ = User;


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


// *************************************************** //
console.log("****************");


let anotherUsername = "John Wick     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"priyam".trueLength();
"Continental    ".trueLength();