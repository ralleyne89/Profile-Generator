const axios = require("axios")
const apiUrl = 'https://api.github.com/users/'

let api = {
    findUser (userName){
        return axios.get(apiUrl + userName).then(function(display){
            return display;
        });
    }
};

module.exports = api;
