//require https module
const https = require('https');
const username = "michaelzalik";



//print message to console
function printMessage(username, badgeCount, points){
     const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
    }

    //TODO: connect to API URL (https://teamtreehouse.com/michaelzalik.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
    response.on("data", data => {
        body += data.toString();
    });

    response.on('end', () => {
        console.log(body);
    });
//TODO: read the data
//TODO: parse data
//TODO: print data    
});