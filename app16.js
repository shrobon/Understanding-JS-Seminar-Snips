/*

Lesson : Arguments 

arguments hold all those values that you pass ,
 to whatever function you are calling 

*/
function greet(firstname,lastname,language){
	language = language || 'en'; //solving the default arguments scenario
	
	if(arguments.length === 0){
		console.log('Missing parameters');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments); //given by the JS engine
	console.log('----------------');
}

greet();
//I can call greet without passing any arguments 
//In other programming languages this would be an error
//result : undefined undefined undefined
//hoisting happening here
greet('Shrobon');
greet('Shrobon','Biswas');
greet('Shrobon','Biswas','English');
//aim to set a default parameter 