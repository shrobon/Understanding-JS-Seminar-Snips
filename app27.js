/*
Lesson : Functional Programming
*/

var arr1= [1,2,3];
console.log(arr1);

var arr2= [];
for(var i=0; i<arr1.length;i++){
	arr2.push(arr1[i]*2);
}

console.log(arr2);

//now let us use a different method
// :Functional Programming

function mapForeach(arr,fn){
	var newArr = [];
	for(var i=0;i<arr.length;i++){
		newArr.push(
			fn(arr[i])
			);
	}
	return newArr;
}

var arr2=mapForeach(arr1,function(item){
	return item*2;
});

console.log(arr2);





//another Example using bind() : Neat Example
var checkPastLimit = function(limiter,item){
	return item > limiter;
}
var arr4 = mapForeach(arr1,checkPastLimit.bind(this,1));
console.log(arr4);


