
//validate the form after last name input is filled		
$("#lname").keyup(function(){
	validateForm();
	})
//validate the form after first name input is filled	
$("#fname").keyup(function(){
	validateForm();})
//validate the form after age input is filled
$("#age").keyup(function(){
	validateForm();
	})
//validate the form after address input is filled
$("#address").keyup(function(){
	validateForm();
	})
//validate the form after email input is filled
$("#email").keyup(function(){
	validateForm();
	})
//validate the form after phone number input is filled
$("#pnumber").keyup(function(){
	validateForm();
	})

	
//if the all the required inputs are filled(the submit button has class "active") and the submit button is clicked, run the submitInfo() function, otherwise do nothing.
$("#submit").click(function(){
	if ($("#submit").hasClass("active"))
	{
	submitInfo()
	}
	
	})
	
// if last name, first name , address and email input are filled, make the submit button active, otherwise remove the active class.
function validateForm(){
  if ( $("#lname").val() != "" && $("#fname").val() != ""  && $("#address").val() != "" && $("#email").val() != "" )
	{
	$("#submit").addClass("active") //add "active" to the submit button
	}
	else{ 
	$("#submit").removeClass("active")//remove "active" to the submit button
	}
		
}

/*This function will run the checkEmail() function to validate the email, if it is valid, 
show a box saying that the user submitted successfully*/
function submitInfo(){
if (checkEmail()){
	alert("Congratulations! You have successfully submitted.");// pop out a box 
	formReset();}        //reset the form after submitted 

}

//clear the form
function formReset()
  {
  document.getElementById("frm").reset() //reset the form which id is "frm"
  }
  
  
  //This function checks the email
 function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//the filter's format is X@X.X
	//test the email to see whether it matches the format of the filter
    if (!filter.test(email.value)) { //if not valid
    alert('Please provide a valid email address');//pop up a box saying the error
    return false;
 }
	return true;// valid ,return true 
}