let _object = function () {
    this.whatWillBePrinted = 'doing something';
    this.doSomething = function () {
        console.log(this);
        console.log(this.whatWillBePrinted);
    };
};

/**
 * 'this' is a key word that makes it possible
 * to access the context where the function was executed.
 * Also, 'this' is set when the function 'RUNS' not when it is declared.
 * 
 * In the following line, 'this' will be a refence to the object created by 
 * new _object().  
 */
new _object().doSomething();

/**
 * The interesting part of it, it that 'doSomething' can
 * be assigned to any variable, even those without an explicit context.
 * For example:
 */
let globalDoSomething = new _object().doSomething;

/**
 * Behind the scenes, globalDoSomething will run inside the
 * global context then 'this' will point at the global context.
 * 
 * Obs: this does not work in strict mode
 */
globalDoSomething();

/**
 * This dynamic assigment of 'this' sometimes is not desired, as for example:
 */

setTimeout(new _object().doSomething, 1000);

/**
 * The previous line will not gives a the expect context to 'doSomething', that would be
 * the object created by the instruction 'new _object()'. This is because 
 * setTimout will execute something like this:
 * 
 * let setTimout = function(callback, time) {
 *      callback(); // that, in this example, is doSomething 
 * }
 */

 /**
  * So, to guarantee the context that 'this' points at two techniques
  * can be used.
  * 
  * First
  * 
  * define the escope to the function like this:
  */

 let anyContext = new _object();
 setTimeout(new _object().doSomething.bind(anyContext), 1000);

 /**
  * Second
  * 
  * Set 'this' to a specific context inside the code of the class/function
  * using a fixed reference, in the following example this reference
  * is '_this': 
  */

 let _objectVersion2 = function () {
    let _this = this;
    _this.whatWillBePrinted = 'doing something';
    _this.doSomething = function () {
        console.log(_this);
        console.log(_this.whatWillBePrinted);
    };
};
setTimeout(new _objectVersion2().doSomething, 1000);
