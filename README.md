getstring
=========

A very  simple library to prompt for user input on the command line.

## Installation

    npm install getstring

## Usage

    var gets = require("getstring");
    
    gets("Who are you?", function (answer) {
        console.log("You are: " + answer);
    };

## Release History

* 0.1.0 Initial release
