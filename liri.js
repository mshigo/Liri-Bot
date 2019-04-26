//dependencies
require("dotenv").config();
var keys = require ('./keys.js');
var Spotify = require("node-spotify-api")
var axios = require("axios")
var moment = require("moment");
var fs = require("fs")

var doWhatItSays = function() {
    fs.readFile("random.txt", "utf8", function(e, data){
        console.log(data);
        


    });
};
// I know it's not much but I was not quite sure where to go/what to do
doWhatItSays();