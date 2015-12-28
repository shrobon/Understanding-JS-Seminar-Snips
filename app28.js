/*

Lesson : Object-Oriented Javascript and Prototypal Inheritance

Classical vs Protypal Inheritance

One object gets access to the data and functions of another object 

Protptypal :
------------
1. simple
2. flexible 
3. extensible 

property access : dot operator obj.prop1
all Objects in JS has a property called proto{}
This is a reference to all other objects

Objects can "share" the same protype if you want them to 
 
Prototype chain

*/

var person = {
	firstname : "Default",
	lastname  : "Default",
	getFullName : function(){
		return this.firstname+ ' '+this.lastname;

	}
}


var shrobon = {
	firstname : "Shrobon",
	lastname  : "Biswas"
}

//please dont do this ever : performance issue
shrobon.__proto__ = person ; 
//attaching the prototype of shrobon object to person object

console.log(shrobon.getFullName());
console.log(shrobon.firstname);

var jane = {
	firstname : 'Jane'
}

jane.__proto__ = person; //shrobon and jane now point to same proto
console.log(jane.getFullName()); //Jane DEFAULT ::: note this
//weird because it rises on the proto chain

var a = {};
var b = function(){};
var c = [];
