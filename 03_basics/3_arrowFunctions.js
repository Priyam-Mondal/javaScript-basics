const user = {
    username: "priyam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Boy"
// user.welcomeMessage()

// console.log(this);   //  in node environment global 'this' is {}, but in browser it is Window

// function chai(){
//     let username = "priyam"
//     console.log(this.username);
// }

// chai()


//for regular func, this depends on the calling context

// const chai = function () {
//     let username = "priyam"
//     console.log(this.username);
// }


//arrow func, Inherits this from the surrounding scope
const chai =  () => {
    let username = "priyam"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return when there is only one statement in function
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "priyam"})


// console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach((e) => console.log(e*100))



/*
  Difference between Regular Functions and Arrow Functions

  | Feature                 | Regular Functions                         | Arrow Functions                            |
  |-----------------------|-----------------------------------------|------------------------------------------|
  | **Syntax**             | Defined using the `function` keyword.  | Uses concise `=>` syntax.                |
  | **this Binding**       | `this` depends on the calling context. | Inherits `this` from the surrounding scope. |
  | **Arguments Object**   | Has its own `arguments` object.        | Does not have its own `arguments` object. |
  | **Constructor Usage**  | Can be used as a constructor with `new`. | Cannot be used as a constructor.         |
  | **Hoisting**           | Function declarations are hoisted.     | Not hoisted; behaves like variables.     |
  | **Implicit Return**    | Requires `return` for returning values.| Supports implicit return for single expressions. |
  | **Methods as Object Properties** | Suitable for object methods with proper `this`. | Not suitable for methods due to lexical `this`. |
*/