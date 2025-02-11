   /*         Write a JavaScript program to check two
            numbers and return true if one of the number
            is 100 or if the sum of the two numbers is
            100   
   */

const first = 70;
const second = 30;

function checkNumbers(first, second) {
    return first === 100 || second === 100 || first + second === 100;
}

console.log(checkNumbers(first, second));