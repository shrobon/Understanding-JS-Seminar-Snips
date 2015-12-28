/*
Lesson : Reflection and Extend
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
shrobon.__proto__ = person ; 

//this is something like foreach loops
for(var prop in shrobon){
	console.log(prop +":" +shrobon[prop]); //getfullname also gets listed !!!
} //lists everything on the object and the objects prototype !!!!

//to check only properties pertaining to an Object but not modified proto
for(var prop in shrobon){
	if(shrobon.hasOwnProperty(prop)){ // checking if shrobon has such a property !!
		console.log(prop +":" +shrobon[prop]); //getfullname also gets listed !!!
	}
}
