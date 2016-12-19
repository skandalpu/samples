/**
* Created by hedwin on 19.12.2016
* 
*/

var getLine = require('./getLine.js');

(function (){
    //Write your code below

    console.log('Write your input...');
    getLine().then(function(line){
        console.log('Your input was: ' + line);

        //Leave this code so you can read you output before the process quits.
        readLastLine();
    });
})();

function readLastLine(){
    console.log('Press Enter to Continue');
    getLine(true).then(function(){
        process.exit();
    });
}