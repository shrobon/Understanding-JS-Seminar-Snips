//Single threaded - one commands is being executed at a time.
//Synchronous - in order
//Consider trying out the next example also
 

function b(){
	console.lof(myVar); // Guess why it is not an error
	//** Remember the scope chain ?? **
	//var myVar;
	//b's outer env = Global Execution context : outer lexical env
	// ** cant find myVar so it goes down the scope chain

}

function a () {
	var myVar=2;
	b();
}
var myVar=1;
a();