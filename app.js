//command line based node app
//TODO: code similar functionality for another API?

//require profile.js
const profile = require('./profile.js');

//username input
const users = process.argv.slice(2);
users.forEach(profile.get);

 