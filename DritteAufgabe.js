  /*  Write a JavaScript program to replace every
      character in a given string with the character
      following it in the alphabet */


// String.fromCharCode
// charCodeAt


// .split: Teilt einen String anhand eines angegebenen Trennzeichens in ein Array von Teilstrings auf.

// .map: Erstellt ein neues Array, indem es eine Funktion auf jedes Element des ursprünglichen Arrays anwendet.

// .fromCharCode: Wandelt Unicode-Werte in ihre entsprechenden Zeichen um und gibt diese als String zurück.

// .charCodeAt: Gibt den Unicode-Wert des Zeichens an der angegebenen Position in einem String zurück.

// .join: Kombiniert alle Elemente eines Arrays zu einem String, wobei ein optionales Trennzeichen zwischen den Elementen eingefügt wird.





















const replaceCharacter = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

console.log(replaceCharacter('abcd')) // Output: bcde