//command line based node app
//TODO: code similar functionality for another API?

const profile = require('./profile.js');

const users = process.argv.slice(2);
users.forEach(profile.get);

 