

        /* Write a JavaScript program to compare two objects
        to determine if the first one contains the same
        properties as the second one (which may also have
        additional properties) */

        const objA = {a: 1, b: 2, c: 1};
        const objB = {a: 1, b: 1, c: 1};
        const objC = {a: 1, b: 1, c: 1};
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
// Object.keys(a): Gibt ein Array mit den Eigenschaftsnamen (Keys) des Objekts a zurück.

// b.hasOwnProperty(key): Überprüft, ob das Objekt b eine bestimmte Eigenschaft key besitzt.

/* every(): Überprüft, ob alle Elemente in einem Array eine gegebene Bedingung erfüllen (in diesem Fall, ob b.hasOwnProperty(key) für 
jeden Key true zurückgibt). */
        
        
const compareObjects = (a, b) => Object.keys(a).every(key => b.hasOwnProperty(key));
        
        
console.log(compareObjects(objA, objB));
console.log(compareObjects(objA, objC));
console.log(compareObjects(objB, objC));