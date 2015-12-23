/*

Lesson: first class functions.
Assign them to variables, pass them around , create them on the fly 

In javaScript functions are nothing but objects 

A function in JS may or may-not have a name. 
functions Without Name : anonymous

CODE property of a function: it is invocable
*/

function greet(){
	console.log('Hi');
}

//consider this as adding a property to a function . Since a function is also an object , we can add properties to it.

greet.language = 'english';
console.log(greet.language);
