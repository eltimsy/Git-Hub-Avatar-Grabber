var fs = require('fs');
var request = require('request');

module.exports  = function downloadImageByURL (url, filePath, i) {
  request.get({url: url, encoding: 'binary'}, function (err, response, body) {
    fs.writeFile(`avatars/${i}`, body, 'binary', function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("The file was saved!");
      };
    });
  });
}
