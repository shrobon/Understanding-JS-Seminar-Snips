/*

call()
bind()
apply()


*/

var person ={
	firstname: 'Shrobon',
	lastname : 'Biswas',
	getFullName : function() {
		var fullname = this.firstname + ' ' +this.lastname;
		return fullname;
	}
}

var logName = function(lang1 , lang2){

	console.log('Logged:'+ this.getFullName()); //this here is the global object : ERROR
	console.log('Arguments: ' + lang1 + ' '+lang2);
	console.log('----------------------------');

}

var logPersonName = logName.bind(person); //defining the 'this' to be valid !!! 
//bind() creates a copy of whatever function you are calling it on
logPersonName();
logPersonName('en');
logPersonName('en','es');


//now the call(this obj, params) : call does not create a copy . it directly executes it 
logName.call(person,'en','es');

//apply(this obj,[param1,param2......,paramN])
logName.apply(person,['en','es']);
