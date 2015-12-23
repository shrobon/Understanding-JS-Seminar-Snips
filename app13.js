/*

Lesson : By value and by Reference

Primities are passed by value

Objects are passed by reference 
b=a (where a is an object)
b is an alias of A . 
*/

//by value( primities)
var a= 3;
var b;

b = a ; //This is by value
//So now b= 3 and a = 3 as well . but these will be in separate memory locations

//changing a wont affect b 
a = 2;
console.log(a);
console.log(b);

//by reference ( for objects and functions)
var c={
	greeting:"hi"
};

var d;
d=c; // d will not have a new memory space

c.greeting ='Hello'; //mutated 

console.log(c);
console.log(d);

//by reference (even as parameters)
function changeGreeting(obj){
	obj.greeting="Hola"; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

//equals operator sets up new memory space (new addresS)
c = {greeting:'howdy'};



