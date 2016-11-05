var gettingToPhilosophy = require('getting-to-philosophy');
var http = require('http');

const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('Path: ' + request.url);
    var article = request.url.split('/');

    gettingToPhilosophy.start(article[2], function (pageName) {
    console.log(pageName)
	}, function (myArray) {
	    var jsonText = [];
		for (i = 0; i < myArray.length; i++) {
		    jsonText[i] = {};
		    jsonText[i].article = myArray[i];
		}
		console.log(JSON.stringify(jsonText));
	});

}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);

});


