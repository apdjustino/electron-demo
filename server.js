const express = require("express");
const msmq = require("node-msmq");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/api/sendmessage", function(req, res) {
    const queue = msmq.openOrCreateQueue('.\\Private$\\TestQueue')
    queue.send("Hello from Node!")
    res.json({"msgSent": true})
})

app.listen(port, function() {});