/*

JavaScript is Dynamically typed 
A Js array can hold a collection of anything
It can also hold functions and we can even call them 

*/
var arr = new Array();
var arr1 = [1,
	false,
	{
		name:'Shrobon',
		address : '111 Main St.'
	},
	function(name){
		var greeting ="Hello ";
		console.log(greeting + name);
	},
	"hello"
];

console.log(arr1);
arr1[3](arr1[2].name);

