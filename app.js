const express = require("express");
const app = express();

const logParams = (err, req, res, next) => {
    console.log("this is middleware");
    console.log("req.params", req.params.id);
    console.log("req.url", req.url);
    if (err) next(err);
    next();
};

// runs on all routes
app.use(express.static(__dirname+"/public"));
app.use(logParams);

// runs only on localhost:8080/
app.get("/", (req, res) => {
    res.send("Hello world");
});

// runs only on /yo
app.get("/yo", (req, res) => {
    res.send("Yo world");
});

app.use((req, res, next) => {
    let err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.send(`oh shit: ${err}`);
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});