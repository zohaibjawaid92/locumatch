var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://server.mux.life');
client.on('connect', function () {
setInterval(function() {
client.publish('myTopic', 'Hello mqtt');
console.log('Message Sent');
}, 5000);
});
