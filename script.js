//components//
//alphabet.length 26
var alphabet = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//numeric.length 10
var numeric = [0,1,2,3,4,5,6,7,8,9];
//specialChar.length 33 
var specialChar=["\ ","\!","\"","\#","\$","\%","\&","\'","\(","\)","\*","\+","\,","\-","\.","\/","\:","\;","\<","\=","\>","\?","\@","\[","\\","\]","\^","\_","\`","\{","\|","\}","\~"];
  

//8 characters and no more than 128 characters
var userLength = parseInt (prompt ("How long do you want your password? Please type a # between 8 characters and 128"));

//to prevent user error
while (isNaN(userLength)===true || userLength<8 || 128<userLength) {
  alert ("please enter a valid number");
  userLength = parseInt (prompt ("How long do you want your password? Please type a # between 8 characters and 128"));
}

// lowercase:
var userLC = confirm ("Do you want lowercase?");
  
// uppercase:
var userUC = confirm ("Do you want uppercase?");

// numeric:
var userNumeric = confirm ("Do you want numeric?");

// specialChar:
var userSpecChar = confirm ("Do you want special character?");
  
//to prevent user error
while (!userLC && !userUC && !userNumeric && !userSpecChar) {
  alert("you must choose at least ONE option");
  userLC = confirm("Do you want lowercase?");
  userUC = confirm("Do you want uppercase?");
  userNumeric = confirm("Do you want numeric?");
  userSpecChar = confirm("Do you want special character?");
}

alert ("hit generate password")

// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //end result
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//generate password
function generatePassword() {
  var result = ""

  //looping until the userLength suffice
  while (result.length !== userLength) {
    
    if (userLC === true && result.length !== userLength) {
      result = result + alphabet[Math.floor(Math.random()*26)].toLowerCase()
    }
      
    if (userUC === true && result.length !== userLength) {
      result = result + alphabet[Math.floor(Math.random()*26)]
    }
      
    if (userNumeric === true && result.length !== userLength) {
      result = result + numeric[Math.floor(Math.random()*10)]
    }
      
    if (userSpecChar === true && result.length !== userLength) {
      result = result + specialChar[Math.floor(Math.random()*33)]
    }
  }
  return result
}











//WHEN the password is generated
//THEN the password is either displayed in an alert or written to 
