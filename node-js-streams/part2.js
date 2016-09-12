var request = require("request");

function printGoogleHTML(callback){
  request("http://www.google.com", function(err, response, body) {
    if (err) {
      throw err;
    }

      callback(body);

  });
}

//function printStuff(stuff){
  //console.log(stuff);
//}

printGoogleHTML(console.log);
