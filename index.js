import express from "express";
const app = express();
const port = 3000;

app.get("/ask", (req, res) => {
  res.send("Hello World!");
});

app.get("/ask/twitter", (req, res) => {
  res.send("architachaudha5");
});

app.get("/ask/login", (req, res) => {
  res.send("<h1>please login </h1>  ");
});

app.get("/ask/youtube", (req, res) => {
  res.send("<h2>youtube</h2> ");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
