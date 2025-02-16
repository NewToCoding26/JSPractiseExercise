

        /*Write a JavaScript function that returns true
        if the provided predicate function returns
        true for all elements in a collection, false
        otherwise. */



































// Leichte Lösung:

/*console.log([1,2,3,4,5,6,8].every(x => x > 0));
  console.log([1,2,3,4,5,6,8].every(x => x > 3));*/


// Komplexere Lösung:
const isEveryElement = (arr, fn) => {
    for(let i = 0; i <arr.length; i += 1) {
        if(!fn(arr[i])) {
            return false;
        }
    }
    return true;
};

console.log(isEveryElement([1,2,3,4,5,6,7,], (x) => x > 0));
console.log(isEveryElement([1,2,3,4,5,6,7,], (x) => x > 3));