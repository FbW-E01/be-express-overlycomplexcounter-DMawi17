import express from "express";

const app = express();
const port = 8000;

const server = app.listen(port, () => {
    console.log(`Server on localhost:${port}`);
});

//...

let counter = 0;

app.get("/", (req, res) => {
    counter;
    res.send(`Count: ${counter}`);
});

//...

app.post("/inc", (req, res) => {
    counter++;
    res.send(`Count: ${counter}`);
});

//...

app.post("/dec", (req, res) => {
    counter--;
    res.send(`Count: ${counter}`);
});

//...

app.post("/die", (req, res) => {
    res.send("signal received: closing HTTP server");
    server.close(() => console.log("HTTP server closed"));
});
