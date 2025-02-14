        /* Write a JavaScript program to check a given string contains
        2 to 4 occurrences of a specified character. */





// .filter: Erstellt ein neues Array mit allen Elementen, die eine bestimmte Bedingung erfüllen.



























const countChars = (str, char) => str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) => countChars(str, char) >= 2 && countChars (str, char) <= 4;

console.log(contains2To4('ooh!', 'o')) // Output: true
console.log(contains2To4('oh!', 'o')) // Output: false
console.log(contains2To4('ooooh!', 'o')) // Output: true
console.log(contains2To4('oooh!', 'o')) // Output: true
console.log(contains2To4('oooooooh!', 'o')) // Output: false