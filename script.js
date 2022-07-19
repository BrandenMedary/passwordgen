// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    password = 
    document.getElementById("card-text").innerHTML(retVal)
  passwordText.value = password;
  //Generate password function
  function generatePassword() {
    //length of password
    var length = 8,
    //characterset and retived value >> pass
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
        //for 
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt Math.random() * n;
    }
    return retVal;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
