// //GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// var length = prompt("What long would you like your password? Please choose between 8 - 128.");
 
// var user = prompt("What types of character types would you like to include?")

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];



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


function generatePassword() {
  // Prompt user for password length
  // Make sure that password length between 8 and 128(inclusive)
  var length = prompt("What long would you like your password? Please choose between 8 - 128.");
  //   Using a confirm prompt the user for special characters
  // var specialChar=true;
  
  var userprompt2 = prompt('Would you like to have to have special character in your password? yes or no')
    if ( userprompt2 === "yes"){
      var specialChar=true;
    } else{
      var specialChar=false;
    }
  // var user = prompt("What types of character types would you like to include?"
  //   Using a confirm prompt the user for numeric characters
  // var numericChar=true;
  var userprompt3 = prompt('Would you like to have to have numeric characters in your password? yes or no')
    if ( userprompt3 === "yes"){
      var numericChar=true;
    } else{
      var numericChar=false;
    }
  //   Using a confirm prompt the user for uppercase characters
  // var upperCaseChar=true;
  var userprompt4 = prompt('Would you like to have to have uppercase characters in your password? yes or no')
  if ( userprompt4 === "yes"){
    var upperCaseChar=true;
  } else{
    var upperCaseChar=false;
  }
  //   Using a confirm prompt the user for lowercase characters
  // var lowerCaseChar=true;
  var userprompt5 = prompt('Would you like to have to have lowercase characters in your password? yes or no')
  if ( userprompt5 === "yes"){
    var lowerCaseChar=true;
  } else{
    var lowerCaseChar=false;
  }
  // Algo for password generation goes below
var password = "";
  for ( i=0; i<length; i++){
    if (specialChar){
      password += getRandomItem(specialCharacters);
  }
   if (numericChar){
    password += getRandomItem(numericCharacters);
  };

    
    if (upperCaseChar){
      password += getRandomItem(upperCasedCharacters);

    }

    if (lowerCaseChar){
      password += getRandomItem(lowerCasedCharacters);
    }
  }
  // return the build password
  //  return "Hello I am the password place holder :)";
  return password.slice(0, length);
 
 
}

// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  return arr[randomIndex];
  // One liner of the above code
  // return arr[Math.floor(Math.random() * arr.length)];
}