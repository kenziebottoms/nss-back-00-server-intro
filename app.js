const { readFile } = require("fs");
const { createServer } = require("http");

const server = createServer();

server.on("request", (req, res) => {
    console.log("req method", req.method);
    console.log("req URL", req.url);
    res.writeHead(200, {"useless-message": "yo bitch"});
    readFile("./index.html", (err, file) => {
        if (err) {
            res.statusCode = 404;
            res.end();
        } else {
            res.end(file);
        }
    });
});

server.listen(8080, () => {
    console.log("listening on port 8080");
});