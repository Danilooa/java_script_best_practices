### Linting

Linting is the process of verifying code quality. This process may identify code snippets that may cause problems is the future.  

[JShint](http://jshint.com/docs/) is an application that verifies problems in JavaScript code.  

JShint is configured in the [.jshintrc](./.jshintrc) placed in the root path of this repository. All the JShint options can be seen [here](http://jshint.com/docs/options/)  .

### Understand why the following topics are important:  

[when ; is automatically placed in the code](./automatic_semicolon_rules.js) 

[best way to check undefined variables](./best_way_to_check_undefined.js)

[why === is better than ==](./best_way_to_compare.js)

[why it is important to declare variables on the top of the contexts](./variable_hoisting.js)

[how 'strict mode' avoids confusion](./when_strict_mode_helps.js)

[how the 'this' key word is assigned and works](./what_is_this.js)

[how to use async/await to make asynchronous code synchronous](./async_await.js)

### Simplify you life by:

running **$ npm init** to init a project  

setting the property **engines** in the file **package.json** to make it clear where you code is allowed to run  

running **$ npm config set save=true** to aways refresh **package.json** when something new is installed  

running **$ npm config set save-exact=true** to defined the exact package versions that your project depends on  

installing **$ npm install -g foreman** and writing an **.env** file to define global variables to your application

always naming files in lower case to avoid crossplatform problems


