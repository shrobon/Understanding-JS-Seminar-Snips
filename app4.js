//check the output of this also 

function a(){

	//b() isnt created only when a is created 
	function b(){
		console.log(myVar);
	}

	b();

}

var myVar = 1;
a();