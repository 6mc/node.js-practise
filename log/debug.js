var fs = require('fs');
var fileName = 'text.txt';
var data =fs.readFile(fileName,"utf8",function(error,data) {

    console.log(data);
});
console.log('islem devam ediyor');