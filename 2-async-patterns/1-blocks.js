const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req);

    if (req.url === "/") {
        res.end("Welcome to our Home page");
    } else if (req.url === "/about") {
        res.end("Here is our short history");
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(i, j);
            }
        }
    } else {
        res.end(`<h1>Oops!</h1>`);
    }
});

server.listen(5000, () => {
    console.log("Server listerning on port 5000....");
});