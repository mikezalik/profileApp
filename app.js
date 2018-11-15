//command line based node app
//TODO: code similar functionality for another API?

//require https module
const https = require('https');
const username = "michaelzalik";

//print message to console
function printMessage(username, badgeCount, points){
     const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
    }

    //connect to API URL (https://teamtreehouse.com/michaelzalik.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
    //read data
    response.on("data", data => {
        body += data.toString();
    });
    response.on('end', () => {
    //parse data
        const profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
    });
    //TODO: print data    
});