var http = require('http');

var requestOptions = {
  host: 'google.com',
  path: '/'
}
function printGoogleHTML(callback) {
  http.get(requestOptions, (response) => {

    response.setEncoding("utf8");

    response.on("data", function(data) {
      console.log(data);
    });

    response.on("end", function() {
      console.log("Response stream complete.");
    });

  });
}
printGoogleHTML()
