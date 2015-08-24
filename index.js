/**
 * Prompt for input
 * @param question
 * @param callback
 */
var getstring = function(question, callback) {
    process.stdout.write(question + " ");
    process.stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
};

module.exports = getstring;
