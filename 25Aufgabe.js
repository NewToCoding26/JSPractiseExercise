        /* Write a JavaScript function to find the first not
        repeated character
        Example string: 'abacddbec'
        Expected output: 'e' */



































const firstNotRepeatedCharacter = (str) => 
    str.split('')
        .filter((item, index, arr) => 
            arr.filter(arrItem => arrItem === item).length === 1
        )[0];

console.log(firstNotRepeatedCharacter('abaccdeeache'));