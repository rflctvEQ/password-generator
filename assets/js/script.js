// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // let password = generatePassword();
    // let passwordText = document.querySelector("#password");
    
    // passwordText.value = password;
  
    // this inquires about password length and stores answer
    let passLength

    function passLengthQuestion() { 
    
        passLength = window.prompt("How many many characters do you want your password to be? Please choose a number between 8 and 128.");

        // failsafe if user chooses invalid password length
        if (passLength < 8 || passLength > 128 || passLength == "") {
            window.alert("Error. Please be sure you're including a number between 8 and 128.");
            passLengthQuestion();
        };
    };

    passLengthQuestion();

    function passCharacters() {
        // this inquires about what content should be included in the generated password 
        let lowerCase = window.confirm("Would you like your password to have any lowercase letters? \na, b, c, d... etc.");
        let upperCase = window.confirm("Would you like your password to have any uppercase letters? \nA, B, C, D... etc.");
        let numeric = window.confirm("Would you like your password to include numbers? \n1, 2, 3, 4... etc.");
        let special = window.confirm("Would you like your password to have any special characters? \n!, @, #, $... etc.");
        
        // this tells the user to go back and try again if they don't confirm any values 
        if (!lowerCase && !upperCase && !numeric && !special) {
            window.alert("Error. You must choose at least one character type.");
            //this sends the user back to the beginning of the window.confirms 
            passCharacters();
        };
    };

    passCharacters();

    // create arrays for lower, upper, numeric, and special

    /*
        create the for loop that will generate the password. 
        the loop should Math.floor(Math.random) on the relevant array and then add that 
        to a string defined OUTSIDE the loop (according to Brandon :))
    */
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    return "The Wizard";
}