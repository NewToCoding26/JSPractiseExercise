        /* Write a JavaScript program to replace the first digit in a
        string (should contains at least digit) with $ character. */




        
/* Die Methode .replace() sucht nach einem Muster (entweder ein String oder ein regulärer Ausdruck) in einem String und ersetzt das erste
Vorkommen dieses Musters durch einen angegebenen Ersatzstring */

// Die Schrägstriche // umschließen einen regulären Ausdruck

const replaceFirstCharacter = (str) => str.replace(/[0-9]/, '$');

console.log(replaceFirstCharacter('lj4vl'))
console.log(replaceFirstCharacter('lj45vl'))
console.log(replaceFirstCharacter('l4jvl'))