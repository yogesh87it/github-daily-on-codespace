// A Look Into Variables 
const dateOfBirth = "19-10-1998";
let country = "Albania";
var city = "London";
street = "24 Private";

console.table([dateOfBirth,country,city,street]);

dateOfBirth = "10-12-2003";//TypeError
country = "Austria";
city="New Yark";
street = "charlie 56";

console.table([dateOfBirth,country,city,street]);

//var does not respect scope except function scope

const  myFriend = "Bob";
if (myFriend==="Bob"){
    var fruit = "apple";
    let veg = "cabbage";
    console.log(fruit,veg); //both printed
}
    console.log(fruit,veg); // Reference Error for veg- not defined. 
    //fruit is printed as var does not respect the scope and available outside the scope
    //let and const respect the scope and will not be available outside it giving error;

function checkFruit(){
    var fruit = "orange";
    let veg = "spinach";
    console.log(fruit, veg);
}
    console.log(fruit); //Reference Error - fruit not defined
//var respects function scope
