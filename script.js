//components//
// random # // console.log (Math.floor(Math.random()));
  //alphabet.length 26
  var alphabet = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  //numeric.length 10
  var numeric = [0,1,2,3,4,5,6,7,8,9];
  //specialChar.length 33 
  var specialChar=["\ ","\!","\"","\#","\$","\%","\&","\'","\(","\)","\*","\+","\,","\-","\.","\/","\:","\;","\<","\=","\>","\?","\@","\[","\\","\]","\^","\_","\`","\{","\|","\}","\~"];
  

//8 characters and no more than 128 characters
  var userLength = parseInt (prompt ("How long do you want your password? Please type a # between 8 characters and 128"));
//needs to enter right value to proceed
  if (userLength<8 || 128<userLength) {
    alert ("please enter a valid number.");
  }

  else if (isNaN(userLength) === true) {
    alert ("please enter a valid number.");
  }
  else {
    alert ("please choose at least ONE from the following options. Hit ok to countinue");
     // lowercase:
  var userLC = confirm ("Do you want lowercase?");
    
  // uppercase:
  var userUC = confirm ("Do you want uppercase?");
  
  // numeric:
  var userNumeric = confirm ("Do you want numeric?");
  
  // specialChar:
  var userSpecChar = confirm ("Do you want special character?");
  };

  //to prevent user error
  if (userLC === false && userUC === false && userNumeric === false && userSpecChar === false) {
    alert ("you must choose at least ONE option.");
  }

  //user selects and log selections to console
  else {

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
generatePassword() = function () {

//length of password
userLength = [i];

//Random selection for variables

for (i=0; i<128; i++) {
  console.log(genRandom)
}

var genRandom = function () {
  function randomUpper () {

  return console.log (alphabet[Math.floor(Math.random()*26)]);
 
 }
 
 function randomLower () {
 
   return console.log ((alphabet[Math.floor(Math.random()*26)]).toLowerCase());
 
 }
 
 function randomNumeric () {
   return console.log (numeric[Math.floor(Math.random()*10)]);
 }
 
 function randomSpChar () {
   return console.log (specialChar[Math.floor(Math.random()*33)]);
 }


}
}







//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page//
