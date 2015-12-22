/*Now look at another way of doing it */
// Lesson Name : Object literal syntax 
var person = {
	firstname : "Shrobon",
	lastname  : "Biswas",
	address: {
		street:"Sector 2 , BF Ground",
		city: "Kolkata"
	}
}; // this is the same as new Object()

function greet(person){
	console.log('Hi '+ person.firstname);
}

greet(person);

greet({
	firstname:"Damayanti",
	lastname :"Ghosh"
});

