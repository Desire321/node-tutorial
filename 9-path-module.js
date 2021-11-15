const path = require("path");

console.log(path.sep);
console.log(path.join);

const filePath = path.join("/content", "generics", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "generics", "text.txt");
console.log(absolute);