const generateHtml = require("./generate-html");
const api = require('./api');

var inquirer = require("inquirer");
var fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Github username?"
    },{
      type: "checkbox",
      name: "color",
      message: "which color would you like?",
      choices: ["red", "green", "blue", "pink"]
    }
  ])
  .then(function(data) {
    var filename =
      data.name
        .toLowerCase() 
        .split(" ")
        .join("") + ".html";

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });

const questions = [];

function writeToFile(fileName, data) {}

function init() {

}
init();



