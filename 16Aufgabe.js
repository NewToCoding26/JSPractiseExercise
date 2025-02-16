
/*Given a year, report if it is a leap year.*/































        
const leapYearOrNot = (year) => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? `${year} Was a Leap Year` : `${year} Was not a Leap Year`

console.log(leapYearOrNot(2000));
console.log(leapYearOrNot(1900));
console.log(leapYearOrNot(2024));
console.log(leapYearOrNot(2023));
console.log(leapYearOrNot(1700));