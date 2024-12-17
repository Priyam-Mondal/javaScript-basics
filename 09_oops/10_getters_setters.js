class User {
    constructor(email, password) {
        // Calls the setter methods for email and password
        this.email = email;  
        this.password = password; 
    }

    // Getter for email (called when accessing johnWick.email)
    // Returns the internal _email value in uppercase
    get email() {
        return this._email.toUpperCase(); 
    }

    // Setter for email (called when assigning johnWick.email = 'newEmail')
    // Stores the raw email value in the private/internal variable _email
    set email(value) {
        this._email = value; 
    }

    // Getter for password (called when accessing johnWick.password)
    // Returns the internal _password value + 'john wick'
    get password() {
        return `${this._password}john wick`; 
    }

    // Setter for password (called when assigning johnWick.password = 'newPassword')
    // Stores the raw password value in the private/internal variable _password
    set password(value) {
        this._password = value; 
    }
}

const johnWick = new User("j@john.ai", "abc");

// Accesses the email using the getter (will convert _email to uppercase)
console.log(johnWick.email); // Output: 'J@JOHN.AI'




//++++++++++++++++++++++++++++ function based syntax ++++++++++++++++++++++++++++++

function NewUser(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    });
}

const chai = new NewUser("chai@chai.com", "chai")

console.log(chai.email);




//++++++++++++++++++++++++++++++ Object based syntax +++++++++++++++++++++++++++++++

const Coffee = {
    _email: 'coffee@gmail.com',
    _password: 'abc',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const coffee = Object.create(Coffee);
console.log(coffee.email);
