/**
 * The following code will print 'undefined'.
 * This is estrange but it will happen since
 * the JavaScript compilator 'hoist' variable declarations
 * to the beginning of the immediate context. Thus, the following
 * code will be interpreted as:
 * 
 * var variable1;
 * console.log(variable1);
 * variable1 = 10;
 */
console.log(variable1);
var variable1 = 10;

/**
 * The following code will print:
 * 
 * undefined 
 * undefined
 * 
 * It will happen because the variables will be hoisted to 
 * their respective contexts. Thus, the code will be compiled like
 * that:
 * 
 * var variable2;
 * 
 * function anyFunction() {
 *     var variable2;
 *     variable2 = 10;
 * }
 * anyFunction();
 * console.log(variable2);
 * variable2 = 10;
 *    
 */
function anyFunction() {
    variable2 = 10;
    var variable2; //It will be hoisted to the top of the anyFunction context
}
anyFunction();
console.log(variable2);
var variable2 = 10; // It will be hoisted to the top of the global context