var filename = "index.js";

var hello = function (name) {
  console.log("Hello " + name);
};

var intro = function() {
  console.log("I'm a Node file called " + filename);
};

module.exports = {
  hello : hello,
  intro : intro
};