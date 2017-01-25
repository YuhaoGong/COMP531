//author: Yuhao Gong
//Name: Main.js

//get the button element by ID
var update = document.getElementById("update");
function check(){
	checkname()
	checkemail()
	checknumber()
	checkzipcode()
}


function checkname(){
	var inputname = document.getElementById("inputname").value;
	var displayname = document.getElementById("displayname").innerHTML;
	if (displayname != inputname){
		document.getElementById("displayname").innerHTML = inputname;
		document.getElementById("inputname").value = "";
	}
}

function checkemail(){
	var inputemail = document.getElementById("inputemail").value;
	var displayemail = document.getElementById("displayemail").innerHTML;
	document.getElementById("displayemail").innerHTML = inputemail;
	document.getElementById("inputemail").value = "";
}

function checknumber(){
	var inputnumber = document.getElementById("inputnumber").value;
	var displaynumber = document.getElementById("displaynumber").innerHTML;
	document.getElementById("displaynumber").innerHTML = inputnumber;
	document.getElementById("inputnumber").value = "";
}

function checkzipcode(){
	var inputzipcode = document.getElementById("inputzipcode").value;
	var displayzipcode = document.getElementById("displayzipcode").innerHTML;
	document.getElementById("displayzipcode").innerHTML = inputzipcode;
	document.getElementById("inputzipcode").value = "";
}


