// The Object.getOwnPropertyDescriptor() method returns an object that describes the attributes of a property on a specified object. 
// This includes important details like whether the property is writable, configurable, enumerable, and its value or get/set methods.

const desc = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(desc);

// output = {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// so, Math.pi is not writable, we can't change its value


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// change property attributes
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key}: ${value}`);
    }
}

// output = price: 250
//          isAvailable: true

// as we made enumerable false, name won't be iterable
// so displaying only price and isAvailable