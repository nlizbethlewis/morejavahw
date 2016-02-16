var numOne;
var month; 

function findOut(){
	numOne= document.getElementById("numOne").value; 
	month = numOne * 11;  
alert("You spend $" 
	+month+ 
	" on the metro"); 

buyCard();

}

function buyCard(){
	if (month > 112) {
	alert("You should buy a monthly metro card!");}
	else {
	alert("You can pay per ride");
}
}