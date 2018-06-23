'use strict';

/**
 * RUlE 1
 * 
 * When a code is interpreted from left to right and an
 * estrange character is found and the strange character is separated
 * from the previous code by a LineTerminator, a semicolon
 * will be inserted between the previous code and the strande character  
 */

/**
 * RULE 1 Example
 * 
 * In the following code 'l' from 'let' will be found
 * after 12. This 'l' will considered an offending token, or a strange 
 * character if you prefer, but there is a LineTerminator in between.
 * Therefore, a semicolon will be inserted after 12.
 */
let variable1 = 12 // a semicolon will be inserted here
let variable2 = 1

/**
 * RULE 2
 * 
 * When a code is interpreted from left to right and an
 * estrange character is found and this strange character is
 * a curly bracket "}" a semicolon will be put before the curly bracket. 
 */

/**
 * RULE 2 Example
 * 
 * In the following code 'l' from 'let' will be found
 * after 12. This 'l' will considered an offending token, or a strange 
 * character if you prefer, but there is a LineTerminator in between.
 * Therefore, a semicolon will be inserted after 12.
 */
if (1 == 1) { console.log('print anything') /* A curly semicolon will be placed here */ };

/**
 * RULE 3
 * 
 * When the end of a line of code is encountered with
 * a token that finishes the statement, a semicolon will be
 * put at end of the line
 */

/**
 * RULE 3 Example
 */
console.log('prints anything') /* a semicolon will be put here since ')' finished the statement */

/**
 * RULE 4
 * 
 * When a code is interpreted from left to right and an
 * estrange character is found. If this estrange character makes sense
 * to the JavaScript syntax a semicolon "WILL NOT" be inserted. 
 */

/**
 * RULE 4 Example 1
 */
let anyFunction = new function () {
  this.anyProperty = 'any value';
}()

console.log(anyFunction /* A semicolon "WILL NOT" be put here since object['property'] is perfect valid syntax */
['anyProperty']
)

/**
 * RULE 4 Example 2
 */
let otherFunction = anyFunction /* A semicolon "WILL NOT" be put here */
/**
 * The following line will break since there "WILL NOT BE" a semicolon
 * after anyFunction. Thus, ths code will be interpreted as:
 * 
 * let otherFunction = anyFunctionany['option1', 'option2', 'option3'].length;
 *
 * This is wrong since there isn't a property ""'option1', 'option2', 'option3'" in the anyFunction
 * object.
 */
['option1', 'option2', 'option3'].length

/**
 * RULE 5
 * 
 * A Restrict production is one of the following statements:
 * 
 * continue, break, return or throw
 * 
 * When a restriction production is found at end of a line and there is
 * a LineTerminator, a semicolon will be placed after the restriction production.
 */

function itWillReturnNothing() {
  return /* "return" is a restriction production then a semicolon will be put here therefore the following code will note run */
  {
    anyProperty: "value";
  }
}
console.log(itWillReturnNothing().anyProperty) /* this line breaks since itWillReturnNothing returns nothing; */
