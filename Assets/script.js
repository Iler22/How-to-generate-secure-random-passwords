var generateBtn = document.querySelector("#generate");
 var passwordText = document.querySelector("#password");

// Assignment Code

function generatePassword (){

var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var symbol =  '.,%<¬`!£?/"$>&^*()_-+=}{@:;~#[]\|';
var upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var password = ''
var tempPassword =''

// enter a number

var length = parseInt(
  prompt('select password length between 8 - 128')
)

// check if it is a number
if(Number.isNaN(length)) {
  alert('enter valid number')
  return null
}

//check length of number


if(length < 8 || length > 128) {
  alert('please enter a number between 8 - 128')
  return null
}

//options for password

var hasNumber = confirm(
  'do you want numbers in your password'
)

var hasLowerCase = confirm(
  'do you want a lowercase in your password'
)

var hasUpperCase = confirm(
  'do you want a uppercase in your password'
)

var hasSymbol = confirm(
  'do you want a symbol in your password'
)


//check that user selects at least one option

if(hasNumber === false && hasLowerCase === false && hasUpperCase === false && hasSymbol === false) {
  alert('Please select one of the previous options')
}


function includeNumber(){
  return number[Math.floor(Math.random()* number.length)]
}


if(hasNumber === true){
  var randomNumber =includeNumber()
  tempPassword += number
}


function includeLowerCase(){
  return lowerAlphabet[Math.floor(Math.random()* lowerAlphabet.length)]
}


if(hasLowerCase === true){
  var randomLowerCase =includeLowerCase()
  tempPassword += lowerAlphabet
}

function includeUpperCase(){
  return upperAlphabet[Math.floor(Math.random()* upperAlphabet.length)]
}


if(hasUpperCase === true){
  var randomUpperCase =includeUpperCase()
  tempPassword += upperAlphabet
}

function includeSymbol(){
  return symbol[Math.floor(Math.random()* symbol.length)]
}


if(hasSymbol === true){
  var randomSymbol =includeSymbol()
  tempPassword += symbol
}


for (var i = password.length; i < length; i++){
  password += tempPassword[Math.floor(Math.random()* tempPassword.length)]
}

passwordText.value = password;

}



//Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click",generatePassword);



