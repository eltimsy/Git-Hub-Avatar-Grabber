var fs = require('fs');
var request = require('request');

//function to check if folder exists
function fsExistsSync(myDir) {
  try {
    fs.accessSync(myDir);
    return true;
  } catch (e) {
    return false;
  }
}

//module to download and save all the avatars to the correct path
module.exports  = function downloadImageByURL (url, filePath, i) {
  //if first tests the folder before running request
  if (fsExistsSync(filePath)){
    request.get({url: url, encoding: 'binary'}, function (err, response, body) {
      fs.writeFile(`${filePath}/${i}`, body, 'binary', function(err) {
        if(err) {
          throw err;
        } else {
          console.log('The file was saved!');
        }
      })
    })
  } else {
    return console.log('Folder does not exist!');
  }
}
