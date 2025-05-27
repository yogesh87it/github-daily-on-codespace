"use strict" //use to add extra checks

// Primitive DataTypes
let bird = "eagle" // String
let age = 30 // Number
let isIntelligent = true // Boolean
let check; //undefined
let problems =  null // null
let bigNumber = 15n //BigInt numbers greater than 2*10^53
//let special = Symbol //Symbol checks unique value 

// Objects

function add(a, b){return a + b};
// typeof
console.log(typeof age);//=> number
console.log(typeof check);//=> undefined
console.log(typeof problems );//=> object * imp💡 null is object
console.log(typeof bigNumber );//=> bigint 
console.log(typeof add);//=> function