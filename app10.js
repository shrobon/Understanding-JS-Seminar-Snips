/*

Lesson : JSON 
JavaScript Object Notation 
**Beter than XML : Consider download times and bandwidth 
Values need to be parsed in quotes 

*/


var objectliteral ={
	firstname : "shrobon",
	isAProgrammer: true
}
//convert an object to a JSON string 
console.log(JSON.stringify(objectliteral));
//take a string and convert it to a JS object 
var jsonValue=JSON.parse('{"firstname": "Mary","isAProgrammer": true}');

console.log(jsonValue);

