  /*  Write a JavaScript program to replace every
      character in a given string with the character
      following it in the alphabet */


// String.fromCharCode
// charCodeAt

const replaceCharacter = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

console.log(replaceCharacter('abcd'))