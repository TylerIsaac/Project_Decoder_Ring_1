// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined || alphabet.length !== 26) {
      return false;
    }

    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();
    const standard = ["a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z"];
    let result = "";
    let substitution = alphabet.split("");
    let filterCheck = [];

    for (let i = 0; i < substitution.length; i++) {
      if (filterCheck.includes(substitution[i])) {
        return false;
      } else {
        filterCheck.push(substitution[i]);
      }
    }

    if (encode == true) {
      for (let i = 0; i < input.length; i++) {
        let inputPosition = input[i];
        if (inputPosition == " ") {
          result += inputPosition;
        }
        for (let j = 0; j < standard.length; j++) {
          if (inputPosition === standard[j]) {
            result += substitution[j];
          }
        }
      }
    }

    if (encode == false) {
      for (let i = 0; i < input.length; i++) {
        let inputPosition = input[i];
        if (inputPosition == " ") {
          result += inputPosition;
        }
        for (let j = 0; j < standard.length; j++) {
          if (inputPosition === substitution[j]) {
            result += standard[j];
          }
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
