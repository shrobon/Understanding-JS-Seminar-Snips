/*
Lesson : Objects , Functions & 'this'

Whenever a function is invoked a new execution context is created

this refers to the global execution context i.e Window
*/

function a(){
	console.log(this); //this is pointing to the global vriable
	this.newvariable="hello"; //attaching a variable to the global object
}

var b= function(){
	console.log(this);
	//in this case also the global object = window is obtained
}

a();

console.log(newvariable); //since attached to global varibale , it will display

b();

var c = {
	name:'The C Object',
	log : function(){ 
	    //functions attached to an object are called methods
		
		var self = this;/** RECTIFICATION * now use self instead of this ! solves the problem */ 

		this.name= 'Updated C object ';
		console.log(this); /*since it is attached to object c --> it is talking only about 
		the object c and not the global object */
		
		//check the following scenario : Beyond Expectations
		var setname= function(newname){
			this.name= newname; // here : this points to the global object !!!! 
		}
		setname('Updated Again !! The C Object');
		console.log(this); 

	}
};
c.log();