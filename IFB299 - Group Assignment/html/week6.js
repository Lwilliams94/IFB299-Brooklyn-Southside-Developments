function validate1(form) {
	console.log(form.Username);
 var x = document.forms["Username"]["Street address"] ["Email address"] ["Password"] ["Comfirm password"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}


function validate(form) {
	if (checkName(form) && checkStreet(form) && checkEmail(form) && checkPassword(form) && checkcomfirmPassword(form)){
		return false;
	}
	return true;

}


function checkName(form) {
	//alert('hi');alert(form.Username.value);
	if (form.Username.value == '') {
		alert("Username is required");
		return false;
	}
	return true;

}

function checkStreet(form) {
	if (form.streetAddress.value == "") {
		alert("Street is required");
		return false;
	}
	return true;

}


function checkEmail(form) {
	if (form.emailAddress.value == "") {
		alert("Email is required");
		return false;
	}
	return true;

}


function checkPassword(form) {
	if (form.Password.value == "") {
		alert("Password is required");
		return false;
	}
	return true;
}



function checkcomfirmPassword(form) {
	if (form.comfirmPassword.value == "") {
		alert("Comfirm Password is required");
		return false;
	}
	return true;
}
