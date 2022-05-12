// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length != 26 || !uniqueAlphabet(alphabet))
      return false;

    const lowercaseInput = input.toLowerCase();
    if(encode)
      return encodeMessage(lowercaseInput, alphabet);

    return decodeMessage(lowercaseInput, alphabet);
  }

  function encodeMessage(input, alphabet){
    const cipher = buildEncodeCipher(alphabet);
    const originalMessage = input.split('');

    return originalMessage.map((letter) => {return cipher[letter]}).join('');
  }

  function decodeMessage(input, alphabet){
    const cipher = buildDecodeCipher(alphabet);
    const originalMessage = input.split('');

    return originalMessage.map((letter) => {return cipher[letter]}).join('');
  }

  function uniqueAlphabet(input){
    const checkArray = [];
    const inputArray = input.split('');

    for(let index = 0; index < inputArray.length; index++){
      if(checkArray.includes(inputArray[index]))
        return false;
      checkArray.push(inputArray[index]);
    }

    return true;
  }

  function buildEncodeCipher(alphabet){
    let index = 97; //Starts at ascii value of lowercase 'a'
    const alphabetString = alphabet.split('');

    const cipher = {};

    for(let character in alphabetString){
      const letter = alphabetString[character];
      cipher[`${String.fromCharCode(index).toString()}`] = letter;
      index++;
    }

    cipher[' '] = ' ';

    return cipher;
  }

  function buildDecodeCipher(alphabet){
    let index = 97; //Starts at ascii value of lowercase 'a'
    const alphabetString = alphabet.split('');

    const cipher = {};

    for(let character in alphabetString){
      const letter = alphabetString[character];
      cipher[letter] = `${String.fromCharCode(index).toString()}`;
      index++;
    }

    cipher[' '] = ' ';

    return cipher;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
