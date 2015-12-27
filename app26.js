/*

Lesson : Function Currying using bind()
Means  : creating a copy of a function but with some preset parameters 

*/

function multiply(a,b){
	return a*b;
}

var multiplyByTwo = multiply.bind(this,2); //this means : first parameter will be 2 

multiplyByTwo(4); //4 here is the second parameter : because bind already set the first parameter

console.log(multiplyByTwo(4));