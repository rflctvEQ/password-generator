// Assignment Code
let generateBtn = document.querySelector("#generate");
// arrays for lower, upper, numeric, and special
let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialArray = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
    // this inquires about password length and stores answer
    passLength = window.prompt("How many many characters do you want your password to be? Please choose a number between 8 and 128.");

    // failsafe if user chooses invalid password length
    if (passLength < 8 || passLength > 128 || passLength == "") {
        window.alert("Error. Please be sure you're choosing a number between 8 and 128.");
        passLength = "";
        return;
    };

    // this inquires about what content should be included in the generated password 
    let lowerCase = window.confirm("Click \"OK\" to include lowercase letters in your password. \na, b, c, d... etc. \n\nOtherwise, click \"Cancel.\"");
    let upperCase = window.confirm("Click \"OK\" to include uppercase letters in your password. \nA, B, C, D... etc. \n\nOtherwise, click \"Cancel.\"");
    let numeric = window.confirm("Click \"OK\" to include numbers in your password. \n1, 2, 3, 4... etc. \n\nOtherwise, click \"Cancel.\"");
    let special = window.confirm("Click \"OK\" to include special characters in your password. \n!, @, #, $... etc. \n\nOtherwise, click \"Cancel.\"");

    // failsafe to ensure user chooses at least one character type
    if (!lowerCase && !upperCase && !numeric && !special) {
        window.alert("Error. You must choose at least one character type.");
        return; 
    };

    // the following creates the master array based on user's choice of character types to include 
    let masterArray = [];
    if (lowerCase){
        masterArray = masterArray.concat(lowerCaseArray); 
    };
    if (upperCase){
        masterArray = masterArray.concat(upperCaseArray);
    };
    if (numeric) {
        masterArray = masterArray.concat(numericArray);
    };
    if (special) {
        masterArray = masterArray.concat(specialArray);
    };

    // this is the empty array the random characters will be added to
    let passwordString = "";

    // this generates a random character (for each iteration) that is then added to passwordString

    for (let i=0; i<passLength; i++) {
        // this spits out a random element from masterArray and adds it to passwordString
        passwordString += masterArray[Math.floor(Math.random() * masterArray.length)];
    };

    // this picks out the textarea (id="password") and changes its content to that of passwordString
    document.querySelector("#password").innerHTML = passwordString;
};

// event listener to generate button
generateBtn.addEventListener("click", writePassword);