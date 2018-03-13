const { readFile } = require("fs");
const { createServer } = require("http");

const server = createServer();

server.on("request", (req, res) => {
    res.writeHead(200, {"useless-message": "yo bitch"});
    
    let url = req.url;
    let resource = url.slice(-1) === "/" ? url.slice(1).concat("index.html") : `${url.slice(1)}.html`;
    readFile(resource, (err, file) => {
        if (err) {
            res.statusCode = 404;
            res.end("Not found");
        } else {
            res.end(file);
        }
    });
});


server.listen(8080, () => {
    console.log("listening on port 8080");
});