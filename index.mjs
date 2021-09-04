import express from "express";

const app = express();
const port = 8000;

let counter = 0;

app.listen(port, () => {
    console.log(`Server on localhost:${port}`);
});

app.get("/", (req, res) => {
    counter;
    res.send(`Count: ${counter}`);
});

//...

app.post("/inc", (req, res) => {
    counter++;
    res.send(`Count: ${counter}`);
});

//..

app.post("/dec", (req, res) => {
    counter--;
    res.send(`Count: ${counter}`);
});

//..

app.post("/die", (req, res) => {
    res.send("shuting down!");
    process.exit;
});

// ...
