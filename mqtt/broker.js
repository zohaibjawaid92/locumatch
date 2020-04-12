var mosca = require('mosca');
var settings = {
		port:1883
	}

var server = new mosca.Server(settings);

server.on('ready', function(err , res){
console.log("Mqtt Connected");
}, (err) => {
    console.log('server not listening' + err);
});