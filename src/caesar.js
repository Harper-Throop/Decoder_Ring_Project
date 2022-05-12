// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true){
    if(shift === 0 || shift > 25 || shift < -25)
      return false;

    const lowercaseInput = input.toLowerCase();

    const inputArray = lowercaseInput.split('');
    const shiftedArray = encode ? encodeShift(inputArray, shift) : decodeShift(inputArray, shift);
    const codedArray = numberToCharArray(shiftedArray);
    return codedArray.join('');
  }

  function encodeShift(characterArray, shift){
    return characterArray.map((character) => {
      let charCode = character.charCodeAt(0);
      if(charCode > 96 && charCode < 123){
        charCode += shift;

        if(charCode < 97)
        charCode += 26;
        else if(charCode > 122)
        charCode -= 26;   //wrap-around logic
      }

      return charCode;
    });
  };

  function decodeShift(characterArray, shift){
    return characterArray.map((character) => {
      let charCode = character.charCodeAt(0);
      if(charCode > 96 && charCode < 123){
        charCode -= shift;

        if(charCode < 97)
        charCode += 26;
        else if(charCode > 122)
        charCode -= 26;   //wrap-around logic
      }

      return charCode;
    });
  };

  function numberToCharArray(numberArray){
    return numberArray.map((number) => String.fromCharCode(number));
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
