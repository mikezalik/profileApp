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
    
function getProfile(username) {
    try {
//connect to API URL (https://teamtreehouse.com/${username}.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
//read data
        response.on("data", data => {
            body += data.toString();
        });
//parse data
        response.on('end', () => {
            const profile = JSON.parse(body);
//print data
            printMessage(username, profile.badges.length, profile.points.JavaScript);
        });
});
request.on('error', error => console.error('Problem with request: ${error.message}'));     
    }
    catch (error) {
        console.error(error.message);
        }
    }

const users = process.argv.slice(2);
users.forEach(getProfile);

 