
function init()
{
	let button= document.querySelector('button');
	button.addEventListener('click', (e) =>{
		generateMsg();

	}); /*Add Event Listener to button element that calls generateMsg() function*/
}

function generateMsg()
{
	 // console.log('hello');//Create a constant array of the ids of the input textfields.*/
   let values = [];

 	const idNames = ['noun1','noun2','verb','adjective','place'];



	/*Using a for loop, populate the values array with the values of the
	 textfields*/
	 for (let i = 0; i < idNames.length; i++) {
 		let value = document.getElementById(idNames[i]).value;
	   if (value === '') {
	   	  	values[i]= 'Word Not Provided';
	   }
		 else {
		   values[i]=value;
		 }

 	}


	let msg = `If anybody is wondering, please know that I am <strong>${values[2]}</strong> at <strong>${values[4]}</strong> without you.
	You might want to consider <strong>${values[3]}</strong> <strong>${values[0]}</strong>... then again, you always preferred
	<strong>${values[1]}</strong>.`;
	document.getElementById('msg').innerHTML= msg;
	  document.querySelector('body').classList.add('red');
	//Display the msg string in the paragraph element with id 'msg'
}
