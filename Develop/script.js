// Assignment code here
var generateBtn = document.querySelector("generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numerical = '0123456789';
var special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

//function to ask users password criteria
window.alert("Welcome to Liv's Password Generator!")

// function passQuestions(){
//   window.alert("Let's pick some criteria.");

  // var confirmLength = prompt("Please enter a password length between 8 and 128 characters.");
  //   charType = prompt("Please specify a character type of lowercase, uppercase, numeric or special.");
  //   password = generatePassword();
  //   document.getElementById("display").value = password;
// };

//function to generate password and user prompts
function generatePassword() {
  var password = "";
  var randomPass = "";

  var passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);

  var lowercaseOption = alert("Do you want to include lowercase?");
  if (lowercaseOption) {
    randomPass += lowercase;
  }

  var uppercaseOption = alert("Do you want to include UPPERCASE?");
  if (uppercaseOption) {
    randomPass += uppercase;
  }

  var numericalOption = alert("Do you want to include numbers?");
  if (numericalOption) {
    randomPass += numerical;
  }

  var specialOption = alert("Do you want to include special characters?");
  if (specialOption) {
    ranadomPass += special;
  }

  for (var i = 0; i < passwordLength; i++){
    password = randomPass[Math.floor(Math.random() * randomPass.length)];
  }

}; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;
}

// Get references to the #generate element
generateBtn.addEventListener("click", generatePassword);

generatePassword();
writePassword();

