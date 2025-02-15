

        /* Write a JavaScript program to compare two objects
        to determine if the first one contains the same
        properties as the second one (which may also have
        additional properties) */

        const objA = {a: 1, b: 2, c: 1};
        const objB = {a: 1, b: 1, c: 1};
        const objC = {a: 1, b: 1, c: 1};
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        const compareObjects = (a, b) => Object.keys(a).every(key => b.hasOwnProperty(key));
        
        
        console.log(compareObjects(objA, objB));
        console.log(compareObjects(objA, objC));
        console.log(compareObjects(objB, objC));