/**
 * Stric mode will prevent variables from
 * being hoisted to the global context since
 * it will break lines such as 'variable1 = value_' below; 
 */

function hoistVariable1(value_) {
    /**
     * This code will hoist the variable variable1
     * because without the 'var/let' key word
     * the compiler will hoist it to the global context 
     */
    variable1 = value_;
}
hoistVariable1(10)
console.log(variable1); // it prints 10 without strict mode

/**
 * Strict mode will throw an error when
 * a read only property is re-assign.
 */
let itHasAReadyOnly = {};
Object.defineProperty(itHasAReadyOnly, 'readOnlyProperty', {
    value: 10,
    writable: false
});

/**
 * Without strict mode, this line will do nothing but will not
 * throw an error 
 */
itHasAReadyOnly.readOnlyProperty = 10;

/**
 * Although the delete statement is only indeed to 
 * remove properties from objects, without strict mode
 * a code that deletes a raw function or obejct will not throw
 * an error even though doing nothing.
 */
let thisWillHaveAPropertyRemoved = {
    propertyToBeRemove = 'any value';
}

/**
 * It is the right way to use the delete statement and works
 * in any mode. 
 */
delete thisWillHaveAPropertyRemoved.propertyToBeRemove;

function thisFunctionCannotBeDeleted() { }

/**
 * This does not remove the function but unexpected
 * also doesn't throw an error. Strict mode will not allow
 * this operation throwing a compilation error.
 */
delete thisFunctionCannotBeDeleted;

/**
 * Strict mode will prevent function with
 * arguments with the same names. Thus,
 * the following line would not compile in strict mode.  
 */
function itHasRepeatedArguments(repeatedArgument, otherArgument, repeatedArgument) {
    console.log(repeatedArgument);
}
itHasRepeatedArguments('value1', 'value2', 'value3'); //Without strict mode it will pring 'value3'

/**
 * With a numeric value starts with 0 in JavaScript,
 * it will be converted to an octal value.
 * In strict mode this kind of assignment will not compile.
 * 
 * Thus, the following line will not compile.
 */
let octalValue = 0129;

/**
 * The 'with' statement is used to make the code clear
 * when you need to access a deep object. However, it is confusing 
 * sometimes and was deprecated and doesn't work in strict mode.
 * 
 * The following line code demonstrated how 'with' could help:
 */

let object1 = {
    object1_1: {
        object1_3: {

        }
    }
}

/**
 * The following code make it clear that
 * what with really does is to be
 * bring the code to the object1.object1_1 context,
 * then object1_3 will accessed directly.
 */
with (object1.object1_1) {
    console.log(object1_3);
}

/**
 * To replace the 'with' statement you can do this:
 */
(function (context_) {
    console.log(context_);
}(object1.object1_1.object1_3));
