function validate(event) {
	
	if (document.login_form.email_form.value == "") {
		alert("Please provide your Email!");
		document.login_form.email_form.focus();
		event.preventDefault();
		return false;
	}
	
	if (document.login_form.email_form.value != "") {
		if(validateEmail() == true) {
			var emailValue = document.getElementById("email_form").value;
		} else {
			alert("Please enter correct email ID")
	     	document.login_form.email_form.focus();
	     	event.preventDefault();
	     	return false;
		}
	}
	
	if (document.login_form.password_form.value == "") {
		alert("Please provide your password");
		document.login_form.password_form.focus();
		event.preventDefault();
		return false;
	} else {
		return true;
	}
	
	if (document.login_form.email_form.value != "" && document.login_form.password_form.value != "") {
		return true;
	} else {
		return false;
}
	
}

function validateEmail() {
	let index_pass = true;
	var emailID = document.login_form.email_form.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");
	if (atpos < 1 || (dotpos - atpos < 2)) {
		index_pass = false;
	}
	
	let email_pass = true;
	let email_regex = /^[a-zA-Z0-9.!#$%&‘+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
	if (!email_regex.test(emailID)) {
		email_pass = false;
	}
	
	if (index_pass && email_pass) {
		return true;
	} else {
		return false;
	}
	
}