//Example of hoisting 
// take : calling vars and funcs before even declaring them
//Examine behaviour of the JS engine
//Sets up memory space for variables and functions

//Functions sit in memory in their entireity
//Variables set to undefined

 
c();
console.log(a);

var a='Hello world';

function c(){
	console.log('Called b !'); 
}
