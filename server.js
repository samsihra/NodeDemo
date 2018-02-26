var http = require("http");
var url = require("url");


function start(route, handle) {    
    function onRequest(request, response) {
        var path = url.parse(request.url).pathname;
        console.log("request for: " + path + " received");

        var postData = "";
        request.setEncoding("utf8");

        request.addListener("add", function(postDataChunk) {            
            postData += postDataChunk
            console.log("Received POST data chunk ");
        }
        );

        request.addListener("end", function() {
            route(handle, path, response, postData);
        });
        route(handle, path, response, postData);
    }
    http.createServer(onRequest).listen(9222);
    console.log("Server has started");    
}

exports.start = start;