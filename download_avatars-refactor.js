var fs = require('fs');
var request = require('request');
require('dotenv').config()

var data;
var getRepo = require("./getRepoCon-module.js");
var argLen = process.argv.length

if (argLen === 4) {
  getRepo(process.argv[2], process.argv[3], (err, result) => {
    console.log("Errors:", err);
    console.log("Result:", result);
  });
} else {
  console.log("Length of arguments wrong");
}
