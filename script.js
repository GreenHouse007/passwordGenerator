const uppercase = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const lowercase = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
const numbers = Array.from({ length: 10 }, (_, i) => i.toString());
const specialSymbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
];

const upperChars = uppercase.join("");
const lowerChars = lowercase.join("");
const numberChars = numbers.join("");
const symbolChars = specialSymbols.join("");

function generatePass() {
  //get value from inputLinks to an external site.
  const length = parseInt(document.querySelector("#length").value, 10);

  //getting checked value from inputLinks to an external site.
  const useUpper = document.querySelector("#uppercase").checked;
  const useNumbers = document.querySelector("#numbers").checked;
  const useSymbols = document.querySelector("#symbols").checked;

  //set an empty Password string variable
  let Password = "";

  //set an empty charSet string variable
  let charSet = "";

  //get the charset and add it (+=) to the lower case letter variable above. (you will do this for the uppercase, numbers and symbol characters too later down the line.
  charSet += lowerChars;

  //use an if statement to check if uppercase, number or symbols is true, then add charset to the correct letters (+= upperChars)
  if (useUpper) charSet += upperChars;
  if (useNumbers) charSet += numberChars;
  if (useSymbols) charSet += symbolChars;

  //Create a loop, set the length of the loop to your length variable above.
  //inside your loop create a variable that sets a random index
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    Password += charSet[randomIndex];
  }

  //Now inside your loop set the Password variable to add your charset[randomindex];
  document.querySelector("#password").value = Password;
}

//finally outside of your loop, use a queryselector to set the value of password equal to your Password variable that you wrote above in the loop.
document.querySelector("#generate")?.addEventListener("click", generatePass);
