// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//click the button






//components//

var requirement = {

  //8 characters and no more than 128 characters
  passSize: function () {
    var userInput = prompt ("How long do you want your password? Please type a # between 8 characters and 128");
    this.passSize = parseInt(userInput)
  }

  // lowercase:
  confirm ("Do you want lowercase?")
    
  // uppercase:
  confirm ("Do you want uppercase?")

  // numeric:
  confirm ("Do you want numeric?")

  // specialChar:
  confirm ("Do you want special character?")
}
while (passSize >=8 && passSize <=128){

  
}

//user selects and log selections to console
function reWriteStats() {
  console.log (
     requirement.passSize);

   console.log (
    requirement.lowercase);

   console.log (
    requirement.uppercase);

   console.log (
    requirement.numberic);

   console.log (
     requirement.specialChar) ;

   console.log ("-----------------")
 }

// Generator Functions

// random # // console.log (Math.floor(Math.random()));
  //alphabet.length 26
  //numeric.length 10
  //specialChar.length 32

function randomLower () {

  console.log (Math.floor(Math.random()*26))

}

function randomUpper () {

  console.log (Math.floor(Math.random()*26))

}

function randomNumeric () {
  console.log (Math.floor(Math.random()*10))
}

function randomChar () {
  console.log (Math.floor(Math.random()*32))
}

// var alphabet = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var numeric = [0,1,2,3,4,5,6,7,8,9];
// var specialChar=["~`!#$%^&*+=-[]\';,/{}|\":<>?";]
// var lowercase [.]
// var uppercase []

//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page//
