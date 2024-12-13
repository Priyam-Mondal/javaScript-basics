// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "priyam",
            lastname: "mondal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //put objects in nested format object in objects
// const obj3 = Object.assign({}, obj1, obj2, obj4) //just merge key-value pairs from all objects

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "hello js users",
    price: "000",
    courseInstructor: "priyam"
}

//suppose we want to use course.courseInstructor multiple times, then writing course.courseInstructor again
//and again is redundent.
// course.courseInstructor


//so destructure required value of the object and give it an alias
//here, destructuring courseInstructor and aliasing as instructor
const {courseInstructor: instructor} = course


console.log(courseInstructor);
// console.log(instructor);


//json format
// {
//     "name": "priyam",
//     "coursename": "hello js users",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
