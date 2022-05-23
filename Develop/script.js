// Assignment code here
//function to ask users password criteria
function passQuestions(){
  window.alert("How long do you want your password? (Between 8-128)");

  
};

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

passQuestions();