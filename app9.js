/*

Tips to avoid namespace collisons 
Solution : use an object container 
*/


var greet ="Hello";
var greet ="Hola";

console.log(greet);
//Use the following as a container 
var english = {};
var spanish = {};

//notice the difference 
english.greet =  "Hello";
spanish.greet =  "Hola";

console.log(english);


