//Objects : collection of name value pairs 
//An object can have another object as its property
//An object can also have functions as its property ( called a mthod)

//way 1 to denote objects
var person = new Object();
person["firstname"] = "Shrobon";
person["lastname"]  = "Biswas" ;

var firstNameProperty ="firstname";
console.log(person);
console.log(person[firstNameProperty]);
/*Now look at another way of doing it */
console.log(person.firstname);

person.address = new Object(); //object inside an object
person.address.street="Sector 2 , BF ground";
person.address.city="Kolkata";

console.log(person.address.street);
console.log(person["address"]["city"]);