const { readFile } = require("fs");
const { createServer } = require("http");

const server = createServer();

server.on("request", (req, res) => {
    // console.log("req method", req.method);
    // console.log("req URL", req.url);
    // console.log("req headers", req.headers);
    console.log("req", req);
});

server.listen(8080, () => {
    console.log("listening on port 8080");
});