const { createReadStream } = require("fs");
const { result } = require("lodash");

const stream = createReadStream("./content/big.txt", "utf8");

//default chunk size 64kb
// last buffer - remender
// highWaterMark - control size
// const stream = createReadStream("./content/big.txt", { highWaterMark: 9000 });
// const stream = createReadStream("./content/big.txt", {encoding: 'utf8'});

stream.on("data", (result) => {
    console.log(result);
});