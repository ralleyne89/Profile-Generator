// $(document).ready(function(){
//   const apiUrl = "https://api.github.com";
//   const apiKey = "";

// })

const generateHTML = require("./generateHTML")


var inquirer = require("inquirer");
var fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },{
      type: "checkbox",
      name: "color",
      message: "which color would you like?",
      choices: ["red", "green", "blue", "pink"]
    },{
      type: "input",
      name: "bio",
      message: "Tell me a little about yourself"
    },{
      type: "input",
      name: "github",
      message: "What is your Github username?"
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



  // ,
    // {
    //   type: "input",
    //   name: "profession",
    //   message: "What is your profession?"
    // },
    // {
    //   type: "input",
    //   name: "experience",
    //   message: "List some of your prior work experience"
    // },{
    //   type: "input",
    //   name: "education",
    //   message: "List your education background"
    // }

