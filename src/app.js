const http = require('http');
const fs = require('fs');
const path = require('path');
const request = require('request');
const hostconfig = require('./hostconfig');
const stream = require('stream');
const promisify = require('util').promisify;
class ReadStream extends stream.Readable {
	_read(){
		this.push('you ');
		this.push('are ');
		this.push('good! \n');
		this.push(null);
	}
}
var rs = new ReadStream();
const server = http.createServer((req, res) => {
	rs.pipe(res);




});
server.listen(hostconfig.port, hostconfig.host, () => {
	console.log('ok!')});
