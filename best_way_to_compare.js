/**
 * It is better to user === over ==.
 * 
 * This is because == converts the variables to the same time
 * before the comparation. On the other hand, === only compares
 * without type convertion.  
 * 
 */

console.log(1 == true ? 'true' : 'false'); //Prints true because 1 is converted to true
console.log(1 === true ? 'true' : 'false'); //Prints false because there is no type convertion

console.log('1' == true ? 'true' : 'false'); //Prints true because '1' is converted to true
console.log('1' === true ? 'true' : 'false'); //Prints false because there is no type convertion
