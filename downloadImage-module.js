var fs = require('fs');
var request = require('request');

function fsExistsSync(myDir) {
  try {
    fs.accessSync(myDir);
    return true;
  } catch (e) {
    return false;
  }
}
module.exports  = function downloadImageByURL (url, filePath, i) {
  if (fsExistsSync(filePath)){
    request.get({url: url, encoding: 'binary'}, function (err, response, body) {
      fs.writeFile(`${filePath}/${i}`, body, 'binary', function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('The file was saved!');
        };
      });
    });
  } else {
    return console.log('Folder does not exist!');
  }
}
