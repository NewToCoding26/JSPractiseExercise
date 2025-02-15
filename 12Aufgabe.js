        /* Write a JavaScript program to find the number of even
        values up to a given number */







/* Die `.push()`-Methode in JavaScript fügt ein oder mehrere Elemente **am Ende eines Arrays** hinzu und gibt die neue Länge des Arrays 
zurück. */



const evenValues = (arr) => arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for(let i = 0; i <= num; i += 1) {
        returnArray.push(i);
    }
    return returnArray;
};


console.log(evenValues(createArrayOfNumbers(10)));
console.log(evenValues(createArrayOfNumbers(27)));