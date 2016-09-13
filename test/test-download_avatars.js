var assert = require("chai").assert;
var should = require("chai").should();
var test = require("../download_avatars-refactor.js");
var test2 = require("../downloadImage-module.js");
var test3 = require("../getRepoCon-module.js");

describe("Checking downloading image module", function() {
  it("should throw an error if invalid folder is given", function() {
    var filepath = "trial";
    var result = test2('http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',filepath,1);
    assert.equal(result,console.log("Folder does not exist!"));
  });
});

/*describe("Check if number arguments is correct", function() {
  it('should throw an error if arguments is incorrect', function() {

  })
})*/

describe("Check if Repo and owner exists", function() {
  it("should throw an error if repo or owner doesn't exist", function() {
    var repoUser = "aasdff"
    var repoName = "asdfasd"
    var result = test3(repoUser, repoName, (err, result) => {
      console.log("Errors:", err);
      console.log("Result:", result);
    });
    assert.equal(result,console.log("The file was saved!"));

  })
})

/*describe("Check if dotenv file exists", function() {
  it("should throw an error if folder doesn't exist", function() {

  });
})*/
