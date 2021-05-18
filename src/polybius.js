// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const alphabet = ["a","b","c","d","e","f","g","h","i/j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z"];
    const polybiusSquare = [
      11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34,
      44, 54, 15, 25, 35, 45, 55,
    ];
    input = input.toLowerCase();
    let result = "";

    if (encode == true) {
      for (let i = 0; i < input.length; i++) {
        let inputPosition = input[i];
        if (inputPosition === " ") {
          result += " ";
        } else if (inputPosition === "i" || inputPosition === "j") {
          result += 42;
        } else {
          for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === inputPosition) {
              result += polybiusSquare[j];
            }
          }
        }
      }
    }
    if (encode == false) {
      const noSpaces = input.replace(/ /g, "");
      if (noSpaces.length % 2 !== 0) {
        return false;
      } else {
        for (let i = 0; i < input.length; i += 2) {
          if (input[i] === " ") {
            result += " ";
            i--;
          } else if (input[i] + input[i + 1] == "42") {
            result += "(i/j)";
          } else {
            for (let j = 0; j < polybiusSquare.length; j++) {
              if (input[i] + input[i + 1] == polybiusSquare[j]) {
                result += alphabet[j];
              }
            }
          }
        }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
