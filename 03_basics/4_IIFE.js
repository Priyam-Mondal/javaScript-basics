// IIFE stands for Immediately Invoked Function Expression.
// It is a JavaScript function that runs as soon as it is defined.

//The main reason to use an IIFE (Immediately Invoked Function Expression) is to create a private scope 
// and avoid polluting the global namespace.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('priyam')

