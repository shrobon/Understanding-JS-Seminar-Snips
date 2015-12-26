/*
Lesson : Understanding closures 
*/



function greet(whattosay){
	//a function that returns a function
	return function(name){
		console.log(whattosay+' '+name);
	}
}

//what happens to the memory space when the execution context is finished 
// the memory still sits there

greet('Hi')('Shrobon');
//      OR
var sayHi = greet('Hi'); // ? how is whattosay remembered ?? CLOSURES 
sayHi('Shrobon');