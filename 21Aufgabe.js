        /* Write a JavaScript function that returns a
        passed string with letters in alphabetical
        order.
        Example string: 'webmaster'
        Expected Output: 'abeemrstw */
































        
/* Die Methode .sort() sortiert die Elemente eines Arrays in einer bestimmten Reihenfolge. Standardmäßig sortiert sie die Elemente als 
Strings basierend auf ihren Unicode-Werten (das ist so etwas wie eine interne Nummer für jedes Zeichen). */



const alphabeticalOrder = (str) => str.split('').sort((a, b) => a > b ? 1 : -1).join('');


console.log(alphabeticalOrder('jkvgö'));
console.log(alphabeticalOrder('abced'));