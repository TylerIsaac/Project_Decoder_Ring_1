// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    if (encode === false) {
      shift = -shift;
    }
    input = input.toLowerCase();

    let result = "";
    let charcode = 0;

    for (let i = 0; i < input.length; i++) {
      let inputCode = input[i].charCodeAt();
      charcode = inputCode + shift;

      if (
        inputCode < 65 ||
        inputCode > 122 ||
        (inputCode > 90 && inputCode < 97)
      ) {
        result += input[i];
      } else {
        if (inputCode + shift <= 96) {
          let wrap = 97 - (inputCode + shift);
          inputCode = 123 - wrap;
        } else if (inputCode + shift >= 123) {
          let wrap = 123 - (inputCode + shift);
          inputCode = 97 - wrap;
        } else {
          inputCode += shift;
        }
        result += String.fromCharCode(inputCode);
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
