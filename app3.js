//follow the next example also 


function a(){

	//b() isnt created only when a is created 
	function b(){
		console.log(myVar);
	}

	var myVar =2;
	b();

}

var myVar = 1;
a(); //can find A . but Cant find B.
b(); // will get an error , becuz there is no b() in global execution context
