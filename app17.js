/*
Function overloading is not possible in JS 
Functions are objects thats why 

*/

function greet(firstname,lastname,language){

	language = language || 'en';
	if(language === 'en'){
		console.log('Hello '+firstname+' '+lastname);
	}

	if(language === 'es'){
		console.log('Hola '+firstname+' '+lastname);
	}
}

function greetEnglish(firstname,lastname){
	greet('Shrobon','Biswas','en');
}

function greetSpanish(firstname,lastname){
	greet('Shrobon','Biswas','es');
}

greetEnglish('Shrobon','Biswas');
greetSpanish('Shrobon','Biswas');