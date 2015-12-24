/*
Lesson : IIFE
Immediately invokable function expressions 
*/

//this is a function statement : must have a name
function greet(name){
	console.log(name);
}

greet('Shrobon');


//using a function expression 
var greetfunc = function(name){
	console.log('Hello '+name);
};
greetfunc('Shrobon');


//This invokes a function immediately after creating it 
var greeting = function(name){
	console.log('Hello '+name);
	//IIFE
}('Shrobon');



//tricking the JS parser 
(function(name){
	var greeting = "Inside IFFE : Hello";
	console.log(greeting+' '+name);
}(' Shrobon')); //IIFE