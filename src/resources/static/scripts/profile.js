let submit = document.querySelector(".btn.btn-primary");
// js event when form is submitted
submit.addEventListener("click", submitForm);

// js function to turn old user data into new user data (from the form)
function submitForm() {	
	let old_name_item = document.getElementById("name");
	let old_name_item_text = old_name_item.innerText;
	let new_name_item = document.getElementById("name-form");
	let new_name_item_value = new_name_item.value;
	
	if (new_name_item_value != "") {
		old_name_item.innerText = new_name_item_value;
	};

	let old_username_item = document.getElementById("username");
	let old_username_item_text = old_username_item.innerText;
	let new_username_item = document.getElementById("username-form");
	let new_username_item_value = new_username_item.value;
	
	if (new_username_item_value != "") {
		let final_username = 'USERNAME:' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + new_username_item_value;
		old_username_item.innerText = final_username;
	};
	
	let old_dob_item = document.getElementById("dob");
	let old_dob_item_text = old_dob_item.innerText;
	let new_dob_item = document.getElementById("dob-form");
	let new_dob_item_value = new_dob_item.value;
	
	if (new_dob_item_value != "") {
		let final_dob = "DATE OF BIRTH: " + new_dob_item_value;
		old_dob_item.innerText = final_dob;	
	};
	
	let old_occupation_item = document.getElementById("occupation");
	let old_occupation_item_text = old_occupation_item.innerText;
	let new_occupation_item = document.getElementById("occupation-form");
	let new_occupation_item_value = new_occupation_item.value;
	
	if (new_occupation_item_value != "") {
		let final_occupation = 'OCCUPATION:' + '\xa0\xa0\xa0\xa0' + new_occupation_item_value;
		old_occupation_item.innerText = final_occupation;
	};
	
	let old_address_item = document.getElementById("address");
	let old_address_item_text = old_address_item.innerText;
	let new_address_item = document.getElementById("address-form");
	let new_address_item_value = new_address_item.value;
	
	if (new_address_item_value != "") {
		let final_address = 'ADDRESS:' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + new_address_item_value;
		old_address_item.innerText = final_address;	
	};
	
	let old_email_item = document.getElementById("email");
	let old_email_item_text = old_email_item.innerText;
	let new_email_item = document.getElementById("email-form");
	let new_email_item_value = new_email_item.value;
	
	if (new_email_item_value != "") {
		let final_email = 'EMAIL' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + new_email_item_value;
		old_email_item.innerText = final_email;
	};
	
	// clear all data in form
	document.getElementById("name-form").value = "";
	document.getElementById("username-form").value = "";
	document.getElementById("dob-form").value = "";
	document.getElementById("occupation-form").value = "";
	document.getElementById("address-form").value = "";
	document.getElementById("email-form").value = "";
	
}

// js function to clear all data in form when it's not submitted, and just closed out
let close = document.querySelector(".btn.btn-secondary");
close.addEventListener("click", closeForm);

function closeForm() {
	document.getElementById("name-form").value = "";
	document.getElementById("username-form").value = "";
	document.getElementById("dob-form").value = "";
	document.getElementById("occupation-form").value = "";
	document.getElementById("address-form").value = "";
	document.getElementById("email-form").value = "";
	
}