// Assignment code here
//function to ask users password criteria
window.alert("Welcome to Liv's Password Generator!")

function passQuestions(){
  window.alert("Let's pick some criteria.");

  var length = prompt("Please enter a password length between 8 and 128 characters.");
    charType = prompt("Please specify a character type of lowercase, uppercase, numeric or special.");
    password = generatePassword();
    document.getElementById("display").value = password;
    document.getElementById("copy-btn").addEventListener("click", copyPassowrd);
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