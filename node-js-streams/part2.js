var request = require("request");

request("http://www.google.com", function(err, response, body) {
  if (err) {
    throw err;
  }

  console.log(body);

});
