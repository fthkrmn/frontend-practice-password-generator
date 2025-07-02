import React from "react"

export default function App() {
  const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

  const [digits, setDigits] = React.useState(7);
  const [passwordOne, setPasswordOne] = React.useState(null);
  const [passwordTwo, setPasswordTwo] = React.useState(null);

  // Copy to clipboard upon clicking functionality:
  const passwordBoxOneRef = React.useRef(null);
  const passwordBoxTwoRef = React.useRef(null);
  const [copied, setCopied] = React.useState(false);


  const generatePasswords = (digits) => {
    let randomPasswordOne = "";
    let randomPasswordTwo = "";
  
    // Generate password one
    for (let i = 0; i < digits; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        randomPasswordOne += characters[randomChar];
    }

    // Generate password two
    for (let i = 0; i < digits; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        randomPasswordTwo += characters[randomChar];
    }

    return { randomPasswordOne, randomPasswordTwo };
  }

  // Handle the click event
  const handleGenerateClick = () => {
    const passwords = generatePasswords(digits);
    setPasswordOne(passwords.randomPasswordOne);
    setPasswordTwo(passwords.randomPasswordTwo);
  }

  // Handle copy to clipboard action
  const handleCopy = async (ref) => {
    if (ref.current) {
      try {
        // Copy the text content of the div to the clipboard
        await navigator.clipboard.writeText(ref.current.innerText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 sec
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <>
      <div className="heading">
        <p id="heading_main">Generate a</p>
        <p id="heading_highlighted_main">random password</p>
        <p id="heading_subtitle">Never use an insecure password again.</p>
      </div>
      <hr id="hbar"/>
      <div id="generate_boxes">
        <button 
          id="btn_generate"
          onClick={handleGenerateClick}>Generate Passwords
        </button>
        <input
          type="number"
          id="digits"
          value={digits}
          min="7"
          max="15"
          onChange={(e) => setDigits(parseInt(e.target.value))}
          placeholder="Enter number of digits"
        />
        <p id="btn_generate_digits">Digits</p>
      </div>
      <hr id="hbar"/>

      {/* Show password boxes if they are generated */}
      {passwordOne !== null &&
        <>
          <div className="password_boxes">
            <div id="password_box_one" ref={passwordBoxOneRef} onClick={() => handleCopy(passwordBoxOneRef)}>
              <p id="password_box_one_txt">{passwordOne}</p>
            </div>
            <div id="password_box_two" ref={passwordBoxTwoRef} onClick={() => handleCopy(passwordBoxTwoRef)}>
              <p id="password_box_two_txt">{passwordTwo}</p>
            </div>
          </div>
          <p className="tx_copy_info">Click to copy password</p>
          {copied && (
            <span
              className={`tx_copied_notice ${copied ? '' : 'slide-out'}`}
              style={{ animationDuration: '0.5s' }}
            >
              Copied!
            </span>
          )}
        </>
      }
    </>
  );
};
