const express = require("express");
const app = express();

const logParams = (req, res, next) => {
    console.log("this is middleware");
    console.log("req.params", req.params.id);
    console.log("req.url", req.url);
    next();
};

// runs on all routes
app.use(logParams);

// runs only on localhost:8080/
app.get("/", (req, res) => {
    res.send("Hello world");
});

// runs only on /yo
app.get("/yo", (req, res) => {
    res.send("Yo world");
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});