class User {
    constructor(username,email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }
    upperUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai123@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.upperUsername());


// if we dont have class syntax, How to do it?

// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`;
// }
// const tea = new User("tea", "tea123@gmail.com", "1234");
// console.log(tea.encryptPassword());