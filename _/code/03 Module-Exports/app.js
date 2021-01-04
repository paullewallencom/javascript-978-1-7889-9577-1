require('./instantHello');
var talk = require('./talk');
var goodbye = require('./talk/goodbye');
var question = require('./talk/question');

talk.intro();
talk.hello("Simon");

var answer = question.ask("What is the meaning of life?");
console.log(answer);

goodbye();