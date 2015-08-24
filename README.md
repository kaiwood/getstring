getstring
=========

A very  simple library to prompt for user input on the command line.

## Installation

    npm install getstring

## Usage

```javascript
var gets = require("getstring");

gets("Who are you?", function (answer) {
    console.log("You are: " + answer);
};
```

An optional, second function argument to validate the input is possible:

```javascript
 var gets = require("./index");
 
 function validateNumber(input) {
   if (isNaN(parseInt(input))) {
     console.log("Not a number");
     return false;
   } else {
     return true;
   }
 };
 
 gets("A number please", validateNumber, function(answer){
   console.log(answer)
   process.exit();
 });
```

## Release History

* 0.2.1 Add syntax highlighting to README.md
* 0.2.0 Add optional validation parameter
* 0.1.0 Initial release
