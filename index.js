/**
 * Prompt for input.
 *
 * If the optional validato
 * @param {string} question
 * @param {function} [validator]
 * @callback callback
 */
var getstring = function() {
    var question = arguments[0];
    var callback = arguments[arguments.length-1]

    var validator = arguments.length > 2 ? arguments[1] : false;


    process.stdout.write(question + " ");
    process.stdin.once('data', function (data) {

        if (validator && ! validator(data)) {
            getstring(question, validator, callback);
        } else {
            callback(data.toString().trim());
        }
    });
};

module.exports = getstring;
