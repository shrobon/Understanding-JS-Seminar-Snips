/*

Function borrowing using apply()

*/

var person={
	firstname : "Shrobon",
	lastname  : "Biswas" ,
	getFullName: function(){
		var fullName = this.firstname+ ' ' +this.lastname;
		return fullName;
	}
}

var person2={
	firstname : "Damayanti",
	lastname  : "Ghosh"
}

console.log(person.getFullName.apply(person2,['en','es']));