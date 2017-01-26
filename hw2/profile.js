//author: Yuhao Gong
//Name: Profile.js

//get the button element by ID
function validate(){
	checkname()
	checkemail()
	checknumber()
	checkzipcode()
	checkpwd()
	clear()
}


function checkname(){
	var inputname = document.getElementById("inputname").value;
	var displayname = document.getElementById("displayname").innerHTML;
	var namealert = document.getElementById("namealert");
	var re = new RegExp("^([a-zA-Z0-9]{5,})$");
	if (displayname != inputname && inputname != "" && re.test(inputname)){
		document.getElementById("displayname").innerHTML = inputname;
		namealert.style.display = 'none';
	}else{
		namealert.style.display = 'block';
	}
}

function checkemail(){
	var inputemail = document.getElementById("inputemail").value;
	var displayemail = document.getElementById("displayemail").innerHTML;
	var emailalert = document.getElementById("emailalert");
	var re1 = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
	if (displayemail != inputemail && inputemail != "" && re1.test(inputemail)){
		document.getElementById("displayemail").innerHTML = inputemail;
		emailalert.style.display = 'none';
	}else{
		emailalert.style.display = 'block';
	}
}

function checknumber(){
	var inputnumber = document.getElementById("inputnumber").value;
	var displaynumber = document.getElementById("displaynumber").innerHTML;
	var phonealert = document.getElementById("phonealert");
	var re2 = new RegExp("^[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$")
	if (displaynumber != inputnumber && inputnumber != "" && re2.test(inputnumber)){
		document.getElementById("displaynumber").innerHTML = inputnumber;
		phonealert.style.display = 'none';
	}else{
		phonealert.style.display = 'block';
	}
}

function checkzipcode(){
	var inputzipcode = document.getElementById("inputzipcode").value;
	var displayzipcode = document.getElementById("displayzipcode").innerHTML;
	var zipcodealert = document.getElementById("zipcodealert");
	var re3 = new RegExp("^[0-9]{5}$")
	if (displayzipcode != inputzipcode && inputzipcode != "" && re3.test(inputzipcode)){
		document.getElementById("displayzipcode").innerHTML = inputzipcode;
		zipcodealert.style.display = 'none';
	}else{
		zipcodealert.style.display = 'block';
	}
}

function checkpwd(){
	var pwd1 = document.getElementById('pwd1').value;
	var pwd2 = document.getElementById('pwd2').value;
	var pwdalert1 = document.getElementById('pwdalert1');
	var pwdalert2 = document.getElementById('pwdalert2');
 	if (pwd1 == "") {
 		pwdalert1.style.display = 'block';
	}else{
		pwdalert1.style.display = 'none';
	}
	if (pwd1 != pwd2) {
		pwdalert2.style.display = 'block';
	}else{
		pwdalert2.style.display = 'none';
	}
}

function clear(){
	document.getElementById("inputname").value = "";
	document.getElementById("inputemail").value = "";
	document.getElementById("inputnumber").value = "";
	document.getElementById("inputzipcode").value = "";
	document.getElementById('pwd1').value = "";
	document.getElementById('pwd2').value = "";

}

