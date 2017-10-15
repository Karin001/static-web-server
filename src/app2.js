const http = require('http');
const fs = require('fs');
const path = require('path');
const hostconfig = require('./hostconfig');
const promisify = require('util').promisify;
const server = http.createServer((req, res) => {
	const read = promisify(fs.readFile);
	var data;

	fs.createReadStream('./src/app.js').pipe(fs.createWriteStream('./src/app2.js'));


});
server.listen(hostconfig.port, hostconfig.host, () => {
	console.log('ok!')});
