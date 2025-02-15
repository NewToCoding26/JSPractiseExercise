  /* Write a JavaScript program to get the
     extension of a filename. */


/* .slice: Extrahiert einen Teil eines Arrays oder Strings und gibt diesen als neues Array oder String zurück, ohne das Original zu ver-
ändern. */

// .lastIndexOf: Gibt den letzten Index zurück, an dem ein bestimmtes Element oder Zeichen in einem Array oder String gefunden wird.

























const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html')); // Output: .html
console.log(getFileExtension('webpack.config.js'));  // Output: .js