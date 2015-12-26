(function(name){
	var greeting ='Hello';
	//here greeting is a local var
	//it will be undefined outside this function 
	//acts as a wrapper : Avoids namespace collisions
	console.log(greeting+' '+name);
}('Shrobon'));


//lets try to act wicked and crash it by sending a global execution context
(function(global,name){
	var greeting = "hello";
	global.greeting="hello";
	console.log(greeting + ' '+ name);
}(window,'Shrobon'));

console.log(greeting);