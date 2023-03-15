let input = require("fs").readFileSync("stdin", "utf8");

let value = input.split("\n");
const pi =  3.14159;

let radius = parseInt(value.shift());

let volume = (4 / 3) * pi * Math.pow(radius, 3);

console.log("VOLUME = " + volume.toFixed(3));