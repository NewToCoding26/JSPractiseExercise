        /* Write a JavaScript program to find the number of even
        digits in a an array of integers */



/* Die `.filter()`-Methode in JavaScript erstellt ein neues Array, das nur die Elemente enthält, die eine bestimmte Bedingung 
(definiert durch eine Callback-Funktion) erfüllen. */






























const evenDigits = (arr) => arr.filter(num => num % 2 === 0).length;

console.log(evenDigits([1,2,3,4,5,6,7,8,9]));
console.log(evenDigits([1,2,3,4,7,9]));