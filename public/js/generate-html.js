const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHtml(colors, color, response) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      </head>
      <body>


      <img src=${response.data.avatar_url} alt="image-here" class="round-img" width="300">
      <div id="big-square">
          <h1>Hi!</h1>
          <h2>My name is 
          <span id="name">
              ${response.data.name}
              </span>
              </h2>
          <br>
          <b id="work-info">Currently @ ${response.data.company}</b>
          <br>
          <p id="location">${response.data.location} <i></i>GitHub <i></i>Blog ${response.data.blog}<i></i></p>
      </div>
      <div id="mid-section">
          <h2 class="header">${response.data.bio}</h2>
          <div class="options">
              <p id="public-repo">Public Repository<br>${response.data.public_repos}</p>
              <p id="followers">Followers<br>${response.data.followers}</p>
              <p id="stars">GitHub Stars <br>(input jquery stars data)</p>
              <p id="following">Following <br>${response.data.following}</p>
          </div>
      </div>
      <footer id="footer" style="background-color: ${colors[color].wrapperBackground}"></footer>




      
      <style>
      body {
        background-color: ${colors[color].wrapperBackground};
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        margin: 0 auto;
      }
      
      .round-img {
          display: flex;
          border-radius: 50%;
          border: 5px solid ${colors[color].photoBorderColor};
          box-shadow: 0 5px 4px rgba(0, 0, 0, 0.3), 0 0 80px rgba(0, 0, 0, 0.1) inset;
          margin: 20px auto;
          top: 40px;
        }
      
      #big-square {
        background-color: ${colors[color].headerBackground};
        text-align: center;
        border-radius: 5px;
        color: white;
        padding-bottom: 10px;
        padding-top: 80px;
        position: relative;
        bottom: 90px;
        margin: 0 auto;
        width: 70%;
        z-index: -1;
      }
      
      #mid-section {
          position: absolute;
          background-color: white;
          padding: 110px 0;
          width: 100%;
          top: 510px;
          z-index: -2;
          margin-bottom: 180px;
      }
      
      .header {
          text-align: center;
      }
      
      #public-repo, #followers, #stars, #following {
          color: white;
          background-color: ${colors[color].headerBackground};
          padding: 20px;
          font-weight: bolder;
          text-align: center;
          border-radius: 5px;
          margin: 5% 15px;
      }
      
      .options {
          display: flex;
          float: left;
          width: 100%;
          justify-content: center;
      }
      </style>
      </body>
      </html>`;
}

module.exports = {
  generateHtml: generateHtml,
  colors: colors
};
