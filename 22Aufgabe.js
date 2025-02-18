            /* Write a JavaScript function that accepts a
            string as a parameter and counts the number
            of vowels within the string. */


































const countVowels = (str, vowels = ['a', 'e', 'i', 'o', 'u']) => str.split('').filter(h => vowels.indexOf(h) > -1).length;


console.log(countVowels('aepfbow')); // Output: 3
console.log(countVowels('aepfbow', ['e'])); // Output: 1,, sucht nur nach dem uschstaben 'e'

