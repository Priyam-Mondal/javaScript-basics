//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "priyam"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "priyam"
    if (username === "priyam") {
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //hoisting

function addone(num){
    return num + 1
}



addTwo(5)   //error, no hoisting

//when storing function into a variable, its called expression
const addTwo = function(num){
    return num + 2
}