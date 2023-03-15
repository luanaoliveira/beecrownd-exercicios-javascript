var input = require("fs").readFileSync("stdin", "utf8");

var value = input.split("\n");

var number1 = parseInt(value.shift());
var number2 = parseInt(value.shift());

var sum = number1 + number2;

console.log("SOMA = " + sum);