// Assignment code here
// Get references to the #generate element (this is the red button)
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){ //if max isnt defined range is 0-min
  if (!max) {
    max = min 
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)
}
function getRandomItem(list) { //generating random numbers and returning them when they are called 
  return list[randomInt(list.length)]
}

function generatePassword(){
  
 var userInput = window.prompt("Pick a password length (must be a numerical value)") //prompt is global scope
 var passLength = parseInt(userInput) //length of the password after user

 if (isNaN(passLength)) {
  window.alert("Not a number!")
  return
 }

 if (passLength < 8 || passLength > 128) {
   window.alert("Password must be between 8-128 characters long")
 return 
}

var usersNumbers = window.confirm("Would you like to include numbers in your password?")
console.log(usersNumbers) //shows true if user presses "OK" 

var usersSpecial = window.confirm("Would you like to include special characters?")
console.log(usersSpecial)

var usersUppercase = window.confirm("Would you like to include uppercase letters?")
console.log(usersUppercase)

var usersLowercase = window.confirm("Would you like to include lowercase letters?")
console.log(usersLowercase)

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var charList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowCharList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specList = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "~"]

var optionsCart = []

if (usersNumbers === true) {
  optionsCart.push(numberList)
}

if (usersUppercase === true) {
  optionsCart.push(charList)
}
if (usersSpecial === true) {
  optionsCart.push(specList)
}

if (usersLowercase === true) {
  optionsCart.push(lowCharList)
}

if (optionsCart.length === 0) {
  optionsCart.push(numberList) //will generate number list by default 
}

var generatedPassword = ""


for (var i=0; i < passLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
}

  console.log(generatedPassword)
  return generatedPassword

}

//if user chooses 'cancel' for first option, it doesnt return after prompt




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (looking for the click event)
generateBtn.addEventListener("click", writePassword);