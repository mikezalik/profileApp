// command line based node app
// TODO: Code similar functionality for another API?

// require https module
const https = require('https');

// require http module
const http = require('http');

const username = 'michaelzalik';

// print error messages
function printError(error) {
  console.error(error.message);
}

// print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

function get(username) {
  try {
    // connect to API URL (https://teamtreehouse.com/${username}.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
      if (response.statusCode === 200) {
        let body = '';
        // read data
        response.on('data', (data) => {
          body += data.toString();
        });
        // parse data

        response.on('end', () => {
          try {
            const profile = JSON.parse(body);
            // print data
            printMessage(username, profile.badges.length, profile.points.JavaScript);
          } catch (error) {
            printError(error);
          }
        });
      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }
    });

    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}

module.exports.get = get;
