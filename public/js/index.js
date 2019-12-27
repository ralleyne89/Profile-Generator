const generateHtml = require("./generate-html");
const api = require('./api');

// npm packages called
// const axios = require("axios");
const pdf = require('html-pdf')
const inquirer = require("inquirer");
const fs = require("fs");
let options = {format:"Tabloid"}


// inquirer is called and prompts questions
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
  .then(({username, color}) => {
    api.findUser(username).then((data) => {
      let html = generateHtml.generateHtml(generateHtml.colors, color, data)
      pdf.create(html, options).toFile("./gitprofile.pdf", (error, response) => {
        if(error) {
          console.log(error)
          return error
        } else {
          console.log(response)
          return response
        }
      })
    })
  })






//   .then(function(data) {
//     const color = data.color
//     const name = data.name
//     var filename =
//       data.name
//         .toLowerCase() 
//         .split(" ")
//         .join("") + ".pdf";

//         axios.get('https://api.github.com/users/' + name)
//         .then(function(response){
//           console.log("11111111111111")
//           console.log(response)

//           $('#name').html(response.data.name)
//           $('.round-img').html(response.data.avatar_url)
          
        
//           axios.get('https://api.github.com/users/' + name + '/repos')
//         .then(function(repos){
//           let stars = 0;
//           console.log("22222222222")
//   // console.log(repos.data[1]);
//   let html = generateHtml(color, stars, repos.data)
//   // fs.writeFileSync(path.join(process.cwd(), "resume.html"), html)
//   // generatePDF(html)
//   // console.log(html)
// })
// })

// fs.writeFileSync(filename, JSON.stringify(data, null, "\t"), function(err) {
//   if (err) throw err;
//   return filename

//   console.log("Success!");
// });

// const questions = [];

// function writeToFile(fileName, data) {}

// function init() {

// }
// init();



//   })

