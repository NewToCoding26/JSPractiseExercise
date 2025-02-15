        /* Write a JavaScript program to get the largest even number
        from an array of integers. */



/* **`Math.max`** gibt die größte Zahl aus einer Liste von Zahlen zurück, während **`Math.max(...)`** (mit dem Spread-Operator) die 
größte Zahl aus einem Array von Zahlen zurückgibt. */



























const largestEvenNumber = (arr) => Math.max(...arr.filter(num => num % 2 === 0))


console.log(largestEvenNumber([1,2,6,7,9,4,8]));
console.log(largestEvenNumber([1,2,6,9,22,8]));

