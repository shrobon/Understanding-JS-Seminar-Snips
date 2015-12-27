/*
Closures and Callbacks

*/

function sayHiLater(){
	var greeting = 'Hi';

	//setTimeout takes in a function object : 1st class function in js 
	setTimeout(function(){
		console.log(greeting);
	},3000);
}

sayHiLater();

//JQuery uses 1st class functions and function expressions 
/*
$("button").click(function(){

});

*/

function tellMeWhenDone(callback){
	var a = 1000;
	var b = 2000;

	callback(); 
}


function tellMeWhenDone(callback){
	
	console.log('All done !!')
	callback(); 
}