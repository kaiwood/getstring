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
});