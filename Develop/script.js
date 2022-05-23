// Assignment code here
//function to ask users password criteria
var passCriteria = function (){
  var specialChar = prompt("Do you want special characters included?");

  if (specialChar = "yes"




}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);