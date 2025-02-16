

        /*Write a JavaScript program to convert a
        comma-separated values (CSV) string to a 2D
        array. A new line indicates a new row in the
        array.

        Example:
        abc, def, ghi
        jkl, mno, pqr
        stu, vwx, yza
        */



























        
/* Das \n ist ein spezielles Zeichen in JavaScript, das für einen Zeilenumbruch steht. Mit .split('\n') wird der CSV-String an jedem Ze-
ilenumbruch geteilt und es entsteht ein Array von Zeilen. Zum Beispiel wird aus dem String: */


const parseCSV = (csvString) => csvString.split('\n').map(row => row.split(','));

const str = `abc, def, ghi
jkl, mno, pqr
stu, vwx, yza`;

console.log(parseCSV(str));