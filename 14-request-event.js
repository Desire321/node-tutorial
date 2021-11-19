const http = require("http");

const server = http.createServer();
// server emits request event
server.on("request", (req, res) => {
    res.end("Welcome");
});

server.listen(5000);