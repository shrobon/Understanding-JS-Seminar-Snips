/*
Function statements 
Function expressions 

Passing functions around .
Functional Programming .

*/
greet();

function greet(){
	console.log('hi from greet');
}

//This is a functions expression

var anonymousGreet = function(){
	console.log('hi from anonymousGreet');
}

/*
Even for the above situation the JS engine creates an object
Only differnce is that this funtions will not be having a name 
*/
anonymousGreet();//invoking the function
//Try put the invocation before the declaration and see

function log(a){
	a();
}

/*log({
	greeting:'hi'
});*/

//now watch this 
log(function(){
	console.log('hi from functions as parameters');
});
