

        /*Write a JavaScript program to generate a
        random hexadecimal color code.
        */





































        
/* Math.random() :
Generiert eine zufällige Zahl zwischen 0 (inklusive) und 1 (exklusiv). Diese Methode wird verwendet, um Zufallszahlen zu erstellen.

Math.floor() :
Rundet eine Zahl ab auf die nächstkleinere ganze Zahl. Hier wird sie verwendet, um das Ergebnis von Math.random() * 16 auf eine Ganzzahl 
zwischen 0 und 15 zu begrenzen.

.toString(16) :
Wandelt eine Zahl in einen String im Hexadezimalsystem (Basis 16) um. Da Farbcodes im Hexadezimalsystem dargestellt werden, wird diese Me-
thode verwendet, um Zahlen wie 10–15 in die Hex-Zeichen a bis f umzuwandeln.

Array.from({ length: 6 }) :
Erstellt ein neues Array mit einer angegebenen Länge (hier 6). Die leeren Plätze im Array dienen als Platzhalter für die sechs Hex-Ziffern 
eines Farbcodes.

.map() :
Wendet eine Funktion auf jedes Element eines Arrays an und gibt ein neues transformiertes Array zurück. Hier wird sie verwendet, um für 
jedes der sechs Array-Elemente eine zufällige Hex-Ziffer zu generieren.

.join('') :
Verbindet alle Elemente eines Arrays zu einem einzigen String. Das leere Argument ('') sorgt dafür, dass keine Trennzeichen zwischen den 
Elementen stehen. */


const randomNumber = () => Math.floor(Math.random() * 16).toString(16);

const randomColor = () => '#' + Array.from(  {length: 6}).map(randomNumber).join('');

console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());

