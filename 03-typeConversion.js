let rollNo = "33";
console.log(typeof rollNo); //=>string
let newRollNo = Number(rollNo);
console.log(newRollNo); //=>string

//💡 NaN is number
let rollNo2 = "33a";
let newRollNo2 = Number(rollNo2);
console.log(typeof newRollNo2); // => number
console.log(newRollNo2); //=> NaN

console.log(typeof NaN); //=> Number
/*care must be taken when converting to number as wrong data conversion will give NaN, and code 
will have logical errors.
*/

//null to number give 0
let turtleNo = null;
console.log(turtleNo);//=> null
console.log(null);//=> null

let newTurtleNo = Number(turtleNo);
console.log(newTurtleNo);//=> 0 💡
/* null value converted to number will give 0. May induce errors as 0 is not null*/

//undefined to number gives NaN
let rabbit = undefined;
let rabbitNo = Number(undefined);
console.log(rabbitNo);//=>NaN

//Boolean to number true->1 false->0
let sunIsPlanet = false;
let sunIsStar = true;
let fact1 = Number(sunIsPlanet);
let fact2 = Number(sunIsStar);
console.log(fact1,fact2);// =>0 ,1

//string that cannot be converted to Number gives NaN
let catName = "tom";
let catNameNo = Number(catName);
console.log(catNameNo);//=>NaN

//save to main

