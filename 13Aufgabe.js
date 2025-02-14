        /* Write a JavaScript program to check whether a given array
        of integers is sorted in ascending order */



const ascendingOrder = (arr) => {
    for(let i = 0; i < arr.length; i += 1) {
        if (arr[i+1] < arr[i]) return false
    }
    return true;
};

console.log(ascendingOrder([1,2,3,4,5,]));
console.log(ascendingOrder([1,2,3,2,5,]));