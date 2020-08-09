// Get elements from html
var generateButton = document.getElementById("generate");
var passwordDisplay = document.getElementById("password");

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

// Generate the password
function writePassword() {
    
    // Variables/ arrays for password generator
    var getLength;
    var getUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var getLower = "abcdefghijklmnopqrstuvwxyz";
    var getNumber = "01234567890";
    var getSymbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var charParameters = []

    // Prompt for password length
    var getLength = (prompt("Chose your passwrod length between 8 and 128."));
    // Working on the length input
    if (getLength >= 8 & getLength <= 128) {
        charParameters = charParameters.concat("password length");

      } else {
        alert("Your password length must be between 8 and 128.");
        //Add return if user enter number less than 8 should return to chose one >=8 and <=128
        return (prompt("Chose your passwrod length between 8 and 128."));
        return;
    }
    //Working on prompting the uppercase
    getUpper = confirm("Includ uppercase in your password?");
        
        if (getUpper === true) {
        charParameters = charParameters.concat("uppercase letters");
         
    }
    //Working on prompting the lowerercase
    getLower = confirm("Includ Lowercase in your password?");
   
    if (getLower === true) {
        charParameters = charParameters.concat("lowercase letters");
        
    } 
    //Working on prompting the numbers
    getNumber = confirm("Includ numbers in your password?");
    
    if (getNumber === true) {
        charParameters = charParameters.concat("numbers");
       
    }
    //Prompting the symbols
    getSymbol = confirm("Includ symbols in your password?");
   
    if (getSymbol === true) {
        charParameters = charParameters.concat("symbols");
       
    }
    //Confirm the selection or show error
    if (getUpper === true & getLower === true & getNumber === true & getSymbol === true) {
        alert("Your password will contain " + charParameters + "");
        return
    } 
      var password = "";
    for (var i = 1; i <= getLength; i++) {
        var randomChar = getRandomChar [Math.floor(Math.random() * choices.length)];
      password = getRandomChar(password + randomChar);
    }
    return password;
}
