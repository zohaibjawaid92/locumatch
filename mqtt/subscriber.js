// var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://server.mux.life');
// // var  express = require('express');
// // var router = express.Router();
// client.on('connect', function () {
//     client.subscribe('OF/#')
// })
//    client.on('message', (topic, message) => {
//     context = message.toString();
//     console.log(context);
//     console.log(topic);
// });


const mqtt = require('mqtt');

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://server.mux.life';
    this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    this.password = 'YOUR_PASSWORD';
  }
  
  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host);

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    // this.mqttClient.subscribe('OF/#', {qos: 0});
    
    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic, message) {
      console.log(message.toString());
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish('mytopic', message);
  }
  subscribe(x){
   var x =  this.mqttClient.subscribe('OF/#', {qos: 0});
    return (x);
  }
}

module.exports = MqttHandler;