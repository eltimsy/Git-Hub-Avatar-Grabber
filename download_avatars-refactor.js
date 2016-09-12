var fs = require('fs');
var request = require('request');
require('dotenv').config()

var data;
var getRepo = require("./getRepoCon-module.js");


getRepo(process.argv[2], process.argv[3], (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});
