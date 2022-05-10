// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const lowercaseInput = input.toLowerCase();
    //return convertToCoordinate('i');
    if(encode)
      return encodeMessage(input).join('');

    return decodeMessage(input)//.join('');
  }

  function encodeMessage(input){
    const inputString = input.split('');

    return inputString.map((character) => {
      const charCode = character.charCodeAt(0);

      if(charCode < 97 || charCode > 122)
        return character;

      return convertToCoordinate(character);
    });
  }

  function decodeMessage(input){
    const inputSubStrings = input.split(' '); //splits into individual arrays when it encounters a space
    const realInputLength = inputSubStrings.reduce((totalLength, subString) => {return totalLength + subString.length}, 0);

    if(realInputLength % 2 != 0)
      return false;

    const message = inputSubStrings.map((subString) => decodeSubString(subString));
    return message.join(' ');
    //return realInputLength;
  }

  function decodeSubString(input){
    const stringLength = input.length;
    const messagePieces = [];

    for(let index = 0; index < stringLength; index += 2){
      const coordinate = input.substring(index, index + 2);
      messagePieces.push(decodeCoordinate(coordinate));
    }

    return messagePieces.join('');
  }

  function decodeCoordinate(numberString){
    const cipher = {
      "11": "a",
      "21": "b",
      "31": "c",
      "41": "d",
      "51": "e",
      "12": "f",
      "22": "g",
      "32": "h",
      "42": "(i/j)",
      "52": "k",
      "13": "l",
      "23": "m",
      "33": "n",
      "43": "o",
      "53": "p",
      "14": "q",
      "24": "r",
      "34": "s",
      "44": "t",
      "54": "u",
      "15": "v", 
      "25": "w",
      "35": "x",
      "45": "y",
      "55": "z"
    }
    const number = parseInt(numberString);

    return cipher[numberString];
  }

  function convertToCoordinate(character){
    let charCode = character.charCodeAt(0) - 96; //change to ascii value then sub 96 to make a - z become 1 - 26
    if(charCode > 9)
      charCode -= 1;

    //const aCoord = (charCode / 5) + 1;  //row coord
    const aCoord = charCode % 5 === 0 ? 5 : charCode % 5; //column coord; if no remainder after dividing by 5, then a coord MUST be 5
    const bCoord = charCode % 5 ? Math.floor(charCode / 5) + 1 : charCode / 5;  //row coord

    const coordinates = `${aCoord}${bCoord}`;
    return coordinates.toString();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
