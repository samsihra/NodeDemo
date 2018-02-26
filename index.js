var server = require('./server.js');
var router = require('./router.js');
var requesthandler = require('./routeHandler');

var handle = {};
handle["/"] = requesthandler.start;
handle["/start"] = requesthandler.start;
handle["/upload"] = requesthandler.upload;
server.start(router.route, handle);