/*
Lesson : Understanding closures part 2 

*/

function buildFunctions(){

	var arr= [];

	for(var i=0; i<3 ; i++){
		arr.push(
			function(){
				console.log(i);
			}
		)
	}

	return arr;
}

var fs= buildFunctions();

fs[0](); // the actual function is being invoked here 
fs[1]();
fs[2]();
// output is 3 in all cases
/* UNDER THE HOOD:

console.log(i) isnt being run while pushing it to the array !! 


*/