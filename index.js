/* Lesson 1
// Factory Function

 function createCircle(radius){
    return  {
        radius,
        draw: function(){
            console.log('draw');
        }
    };    
}

const circle = createCircle(1)

//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

*/

/*Lesson 2
// string, numbers, Boolean, null, undefined

const fname = 'John';
const age = 30;

//Concatenation
console.log('My name is ' + fname + ' and i am ' + age);
//Template String
console.log(`My name is ${fname} and I am ${age}`)
*/

//Arrays

/*
const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person)

const {firstName, lastName, address: {city}} = person
console.log(city)
