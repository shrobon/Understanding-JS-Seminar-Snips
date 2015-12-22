//this is all about callbacks
//We will be talking about event queue's soon

function waitThreeSeconds(){
	var ms = 3000+ new Date().getTime();
	while(new Date() < ms ){}
		console.log('finished function');
}

function clickHandler(){
	console.log('click event !');
}

//listen for the click event 

document.addEventListener('click',clickHandler);
// you have to check when javascript will cater to the event queue after the click is made 
//The JS engine will not look at the event queue until the stack is empty 
//Now JS engine keeps watching the Event Queue , but it will do so synchronously 


waitThreeSeconds();
console.log('finished executing !');
