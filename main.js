const form = document.getElementById('booking-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.error-message');
  formControl.classList.add('error');
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}


function Validname()
{
   let username=document.getElementById("newmine").value;
   
   if (username== "null" || username == "")
          {
             alert( "enter correctname");
             return false;
          }

 }


const phoneRegex = /^\d{10}$/;

phoneInput.form.addEventListener("submit", function(event) {
  if (!phoneRegex.test(phoneInput.value)) {
    event.preventDefault();
    alert("Please enter a valid 10-digit mobile number.");
  }
});
function myValidator() {
  var birthday = document.getElementById("dob").value; // Don't get Date yet...
  var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; // add anchors; use literal
  var regexVarTest = regexVar.test(birthday); // pass the string, not the Date
  var userBirthDate = new Date(birthday.replace(regexVar, "$3-$2-$1")); // Use YYYY-MM-DD format
  var todayYear = (new Date()).getFullYear(); // Always use FullYear!!
  var cutOff19 = new Date(); // should be a Date
  cutOff19.setFullYear(todayYear - 19); // ...
  var cutOff95 = new Date();
  cutOff95.setFullYear(todayYear - 95);
  if (!regexVarTest) { // Test this before the other tests
    dobErrMsg.innerHTML = "enter date of birth as dd/mm/yyyy";
  } else if (isNaN(userBirthDate)) {
    dobErrMsg.innerHTML = "date of birth is invalid";
  } else if (userBirthDate > cutOff19) {
    dobErrMsg.innerHTML = "you have to be older than 19";
  } else if (userBirthDate < cutOff95) {
    dobErrMsg.innerHTML = "you have to be younger than 95";
  } else {
    dobErrMsg.innerHTML = "";
  }
  return userBirthDate; // Return the date instead of an undefined variable
function Validmail()
        {
           let mymail=document.myform.myemail.value;
           let attherate=mymail.indexOf("@");
           let atthedot=mymail.lastIndexOf(".");

           if (attherate<1 || atthedot<attherate+3 || atthedot>=mymail.length)
                  {
                     alert( "enter the correct email");
                     return false;
                  }
                }   
                   
  form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateName() && validateEmail() && validatePhone()) {
    alert('Form submitted successfully');
    form.reset();
  }
});