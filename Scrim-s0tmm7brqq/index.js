document.addEventListener("DOMContentLoaded", function() {
    const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

    let input = document.getElementById("digits");
    let passwordOneBox = document.getElementById("password_box_one_txt");
    let passwordTwoBox = document.getElementById("password_box_two_txt");

    function generatePasswords() {
        let digitsAsked = parseInt(input.value); // Get the number of digits requested by the user
        let randomPasswordOne = "";
        let randomPasswordTwo = "";

        // Generate password one
        for (let i = 0; i < digitsAsked; i++) { // Generate exactly 'digitsAsked' characters
            let randomChar = Math.floor(Math.random() * characters.length);
            randomPasswordOne += characters[randomChar];
        }

        // Generate password two
        for (let i = 0; i < digitsAsked; i++) { // Generate exactly 'digitsAsked' characters
            let randomChar = Math.floor(Math.random() * characters.length);
            randomPasswordTwo += characters[randomChar];
        }

        return { randomPasswordOne, randomPasswordTwo };
    }

    // Add event listener for button click
    let generateButton = document.getElementById("btn_generate");

    if (generateButton) {
        generateButton.addEventListener("click", function() {
            let passwords = generatePasswords();
            console.log(passwords.randomPasswordOne + " " + passwords.randomPasswordTwo);

            // Set the generated passwords to the textContent of the elements
            passwordOneBox.textContent = passwords.randomPasswordOne;
            passwordTwoBox.textContent = passwords.randomPasswordTwo;
        });
    }
});
