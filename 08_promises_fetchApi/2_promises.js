//study link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


// create a promise
const promiseOne = new Promise((resolve, reject) => {
    // do async task
    // DB calls, cryptography, network calls

    setTimeout(() => {
        console.log("Async task 1");
        // we have to call resolve() to connect promise with .then()
        resolve();
    }, 1000);
});

// comsume promise
promiseOne.then(() => {
    console.log("Async 1 resolved");
})


// another syntax, as we are not storing the promise in variable
// we can directly apply .then() with the created promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();        
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
    
});


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // now suppose, we got the data
        // we can pass data to .then() also by passing it through resolve(data)
        resolve({username: "Priyam",email: "myselfPriyam@gmail.com"})
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
    
});


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "Jhon Wick",email: "myselfJWick@gmail.com"});
        }else{
            reject("ERROR: Something went wrong");
        }
    }, 2000);
});

// suppose we want username from user, but to return it?
// .then() chaining
// value returned by a .then() will be propagates down to next .then()
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log("Inside chained .then(): ", username);
    
}).catch((error) => {
    console.log(error);    
}).finally(() => {
    console.log("The promise is either or rejected");    
});



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "Javascript",password: "123"});
        }else{
            reject("ERROR: JS went wrong");
        }
    }, 2000);
});


// ++++++++++++++++++++++++ another way of consuming promise +++++++++++++++++++++++++++++++
// using async-await
// asyncs-await doesn't handle error implicitly
// we need to wrap in try-catch block
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    }catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();


//+++++++++++++++++++++++++++++++ fetch using async-await +++++++++++++++++++++++++++++

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


//++++++++++++++++++++++++++++ fetch using promise ++++++++++++++++++++++++++++++++

// fetch returns a promise, so applying .then() and .catch() directly
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);    
});


