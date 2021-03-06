const colour = require('../colour')

let lineBreak = '\n<red>-----<yellow>-----<green>-----<black>-----<blue>-----<magenta>-----<cyan>-----<white>-----<black>-----<red>-----<green>-----<yellow>-----<blue>-----<magenta>-----<cyan>-----<white>-----\n';
/* use colour.log */
colour.log.black("black");
colour.log.red("red");
colour.log.green("green");
colour.log.yellow("yellow");
colour.log.blue("blue");
colour.log.magenta("magenta");
colour.log.cyan("cyan");
colour.log.white("white");
colour.log.std("std");
colour.log.bold("bold");
colour.log.parse("<blue>col<yellow>our<red>ful");

colour.log.parse(lineBreak);

/* use colour.text */
console.log(colour.text.black("black"));
console.log(colour.text.red("red"));
console.log(colour.text.green("green"));
console.log(colour.text.yellow("yellow"));
console.log(colour.text.blue("blue"));
console.log(colour.text.magenta("magenta"));
console.log(colour.text.cyan("cyan"));
console.log(colour.text.white("white"));
console.log(colour.text.std("std"));
console.log(colour.text.bold("bold"));

colour.log.parse(lineBreak);

/* use colour.parse */
let colourful = "A <red>col<yellow>our<green>ful <red>sentence <green>to <yellow>make <blue>reading <magenta>your <cyan>terminal <white>easier.";
colourful = colour.parse(colourful);
console.log(colourful);
