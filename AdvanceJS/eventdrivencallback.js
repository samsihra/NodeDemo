// 2:
// event-driven
// asynchronous callbacks
// utilizing an event loop
// var result = database.query("SELECT * FROM hugetable");
// console.log("Hello World");

// // asynchronously
// database.query("SELECT * FROM hugetable", function(rows) {
//     var result = rows;
//     });
//     console.log("Hello World");

var http = require("http");

http.createServer(onRequest).listen(8888);

console.log("Server has started.");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}


