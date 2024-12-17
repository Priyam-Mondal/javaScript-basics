function setUsername(username) {
    // complex DB calls
    this.username = username;
}

// function createUser(username, email, password) {
//     setUsername(username);
//     this.email = email;
//     this.password = password;
// }

// const u1 = new createUser("Priyam", "priyam@gmail.com", "123");
// console.log(u1);

// output= createUser { email: 'priyam@gmail.com', password: '123' }
// not setting the username using setUsername function, because setUsername() is getting called from createUser()
// but the this.username is not returned inside createUser() function.
// because its getting deleted after the setUsername() function finish its execution
// so the u1 user contains email,password not username

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const u2 = new createUser("John Wick", "jw@gmail.com", "000");
console.log(u2);

// output = createUser {
//   username: 'John Wick',
//   email: 'jw@gmail.com',
//   password: '000'
// }