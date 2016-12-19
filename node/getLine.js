/**
* Created by hedwin on 19.12.2016
* 
* getLine() is exported as module, returning Q.promise with the user input from console.
* @usage var getLine = require('./getLine.js');
*
* @param {boolean} triggerOnNull if true, then promise will resolve even if no data in the input.
* @returns stream input as {Promise< string, null>}
*/

var readline = require('readline'),
    Q = require('q'),
    myString = '',
    myPromise = null,
    _triggerOnNull = false;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    myString = line;
    if(myPromise && (_triggerOnNull || !_triggerOnNull && line)){
        myPromise.resolve(myString);
    }
});

module.exports = function (triggerOnNull) {
    var defer = Q.defer();
    myPromise = defer;
    _triggerOnNull = triggerOnNull ? true : false;
    return defer.promise;
};