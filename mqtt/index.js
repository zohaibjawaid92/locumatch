var express = require('express');
var app = express();
var mqttHandler = require('./subscriber');

var mqttClient = new mqttHandler();
mqttClient.connect();

// Routes
app.post("/send-mqtt", function(req, res) {
  mqttClient.sendMessage(req.body.message);
  res.status(200).send("Message sent to mqtt");
});

// app.get("/subscribe", function(req, res) {
//   mqttClient.subscribe((data) => {
//    res.json(data);
//   });
// });


module.exports = app;
