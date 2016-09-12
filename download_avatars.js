var fs = require('fs');
var request = require('request');
require('dotenv').config()

var data;
var getRepo = require("./getRepoCon-module.js");

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request'
    },
    qs: {
      'access_token': process.env.USERTOKEN
    }
  }

   request(options, function(err, response, body) {
     var avatar = [];
     data = JSON.parse(body);
     if (err) {
       throw err;
     } else {
       for(var i = 0; i < data.length; i++) {
         downloadImageByURL (data[i].avatar_url, 'avatars', data[i].login);
         avatar.push(data[i].avatar_url);
       }
       cb(err, avatar);
     }
   })
}

function downloadImageByURL (url, filePath, i) {
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


getRepo(process.argv[2], process.argv[3], (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});
