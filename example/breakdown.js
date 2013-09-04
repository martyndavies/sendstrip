var sendstrip = require('../sendstrip');
var email = "\"SendGrid Test Yeah\" <send.grid.test@gmail.com>";

sendstrip(email, function(err, name, address, to ,domain){
	console.log(err);
	console.log(name);
	console.log(address);
	console.log(to);
	console.log(domain);
});

