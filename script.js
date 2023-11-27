//your JS code here. If required.
const form=document.getElementById("form");
const onSubmitForm(event){
	const data={
		First Name:event.target.First Name.value;
		Last Name:event.target.Last Name.value;
		Phone Number:event.target.Phone Number.value;
		Email ID:event.target.Email ID.value;
	}
	alert(data);
}
form.addEventListener("submit",onSubmitForm);
alert(form);
