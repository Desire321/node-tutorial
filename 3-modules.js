// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");

require("./7-mind-grenade");

const data = require("./6-altenertive-flavour");
console.log(data);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);