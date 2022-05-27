// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numerical = '0123456789';
var special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

//function to ask users password criteria
window.alert("Welcome to Liv's Password Generator!")

//function to generate password and user prompts
function passQuestions() {
  var result = "";

  var passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);

  var lowercaseOption = confirm("Do you want to include lowercase?");
  if (lowercaseOption) {
    result += lowercase;
  }

  var uppercaseOption = confirm("Do you want to include UPPERCASE?");
  if (uppercaseOption) {
    result += uppercase;
  }

  var numericalOption = confirm("Do you want to include numbers?");
  if (numericalOption) {
    result += numerical;
  }

  var specialOption = confirm("Do you want to include special characters?");
  if (specialOption) {
    result += special;
  }
};

// Get references to the #generate element
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++){
    password = result[Math.floor(Math.random() * result.length)];

  return password;
  }
  generatePassword();
}; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


passQuestions();
writePassword();

