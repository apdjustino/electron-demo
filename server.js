const express = require("express");
const msmq = require("node-msmq");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/api/sendmessage", function(req, res) {
    const queue = msmq.openOrCreateQueue('.\\Private$\\TestQueue')
    queue.send(req.body.message)
    res.json({"msgSent": true})
})

app.listen(port, function() {});