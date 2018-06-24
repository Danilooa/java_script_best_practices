'user strict';

/**
 * await / async is a feature that makes it possible
 * to execute asynchronous operations in a synchronous way. 
 *
 * 
 * 
 * For await/async to work it is necessary to
 * transform the asynchronous operations into promises.
 * The aim of the next function is exactly that,
 * it will take as arguments a function, its arguments and 
 * the time in milliseconds to wait until the function execution 
 *  
 * @param {Function} parameters.callback a function to be transformed into a promise
 * @param {Array} parameters.args arguments to be passed to the function
 * @param {Number} parameters.timeout time to wait until the function execution
 */
function getPromise(parameters) {
    return new Promise(function (resolve, reject) {
        let callback = parameters.callback;
        let args = parameters.args;
        let timeout = parameters.timeout;
        setTimeout(function () {
            resolve(callback.apply({}, args));
        }, timeout);
    });
}

/**
 * The function where all the execution happens must be prefixed 'async'.
 * After that, each promise must be prefixed by 'await'.
 */
(async function run() {

    /**
     * getPromise is transforming the function sum, multiply and divide into promise.
     */

    /**
     * Although this call should be the last to execute, since it has the highest timeout,
     * because the run() is prefixed by 'async' and the promises by 'await' the code will execute
     * in the exact order that it was written.
     */
    let sumResult = await getPromise({ callback: sum, args: [10, 10], timeout: 2000 });
    console.log('sum result: ' + sumResult);

    let multiplicationResult = await getPromise({ callback: multiply, args: [10, 10], timeout: 1000 });
    console.log('multipliacation result: ' + multiplicationResult);

    let divisionResult = await getPromise({ callback: divide, args: [10, 10], timeout: 500 });
    console.log('division result: ' + divisionResult);
})();

function sum(number1, number2) {
    console.log('Running sum... ');
    return number1 + number2;
}

function multiply(number1, number2) {
    console.log('Running multiply... ');
    return number1 * number2;
}

function divide(number1, number2) {
    console.log('Running divide... ');
    return number1 / number2;
}