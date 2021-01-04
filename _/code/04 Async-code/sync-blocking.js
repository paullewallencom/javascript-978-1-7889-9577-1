var fs = require("fs");

console.log("Going to get a file");
var file = fs.readFileSync('sync-blocking.js');
console.log("Got the file");

console.log("App continues ...");