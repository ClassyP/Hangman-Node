// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

function Letter(char) {
    this.letter = char;
    this.placeHolder = "_ ";
    this.guessed = false;
};

var gameWord = "cow";

var thing = new Letter("c");
var thing = new Letter("o");
var thing = new Letter("w");


var thing2 = {
    letter: "Q",
    placeHolder: "_ ",
    guessed: false
};

console.log(thing);
console.log(thing2);

