// singleton
// Object.create

// object literals

//define Symbol
const mySym = Symbol("key1")

const JsUser = {
    name: "Priyam",
    "full name": "Priyam Mondal",
    [mySym]: "mykey1",  //to define Symbol as a key use []
    age: 18,
    location: "Kolkata",
    email: "priyam@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

//prefer to use myObj.["keyName"] syntax to access object keys

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "priyam@chatgpt.com" //overwrite object value

// Object.freeze(JsUser)    //to lock an object

JsUser.email = "priyamh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());