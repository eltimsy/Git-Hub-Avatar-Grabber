var request = require('request');
var downloadImage = require('./downloadImage-module.js')
require('dotenv').config()
var useToken = process.env.USERTOKEN

//testing to see if token is correct and exists
if (useToken === undefined) {
  throw 'No key found';
} else {
  //running the module to get git contributors from the given repo
  module.exports = function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
      url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
      headers: {
        'User-Agent': 'request'
      },
      qs: {
        'access_token': useToken
      }
    }
    request(options, function(err, response, body) {
      var avatar = [];
      data = JSON.parse(body);
      if (err) {
        throw err;
      } else {
        //testing to see if the repo owner and name exists
        if (data.message === 'Not Found') {
          return console.log('This is not a valid repo Owner or name');
        } else {
          //pushing values to download module to download images
          for(var i = 0; i < data.length; i++) {
            downloadImage (data[i].avatar_url, 'avatars', data[i].login);
            avatar.push(data[i].avatar_url);
          }
        }
        //returning results to main module
        cb(err, avatar);
      }
    })
  }
}
