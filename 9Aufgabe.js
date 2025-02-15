       /* Given two values, write a JavaScript program to find out
        which one is nearest to 100 */





























        const nearestTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;

        console.log(nearestTo100(60, 90)); // Output: 90