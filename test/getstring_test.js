var expect = require("chai").expect;
var gets = require("../index");

describe("Prompting the user for input", function () {
    var stdin;

    beforeEach(function () {
        stdin = require('mock-stdin').stdin();
    });

    it("should be possible to prompt the user", function (done) {
        process.nextTick(function () {
            stdin.send("Answer!");
        });

        gets("Question?", function (answer) {
            expect(answer).to.equal("Answer!");
            done();
        });
    });

    it("should be possible to give an additional argument to validate the input", function (done) {
        function validateInput(input) {
            var number = parseInt(input);
            if (isNaN(number)) {
                return false;
            } else {
                return true;
            }
        }

        process.nextTick(function () {
            stdin.send("123");
        });

        gets("Give me a number", validateInput, function (answer) {
            expect(answer).to.equal("123");
            done();
        });
    })
});