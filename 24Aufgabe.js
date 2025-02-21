                /*Write a JavaScript function to extract unique
                characters from a string. */

































                
const getUniqueCharacters = (str) => str.split('').filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

// Ein Set in JavaScript ist eine Sammlung eindeutiger Werte, die keine Duplikate zulässt und in beliebiger Reihenfolge gespeichert werden.

// Einfachere Lösung

const extractUniqueCharacters = (str) => new Set(str.split(''));

// In String Machen

const extractInStringUniqueCharacters = (str) => [...new Set(str.split(''))];


console.log(getUniqueCharacters('aaaaaabbbbbc'))
console.log(extractUniqueCharacters('aaaaaabbbbbc'))
console.log(extractInStringUniqueCharacters('aaaaaabbbbbc'))