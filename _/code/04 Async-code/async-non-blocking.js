var fs = require("fs");

console.log("Going to get a file");

fs.readFile('sync-blocking.js', function(err, file) {
  console.log("Got the file");
  fs.readFile('async-non-blocking.js', function(err, file) {
    console.log("Got the other file");
  });
});

console.log("Meanwhile, app continues");