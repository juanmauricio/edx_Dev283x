var path = require('path');

module.exports = {
    posts: require(path.join(__dirname, 'posts.js')),
    comments: require(path.join(__dirname,'comments.js'))
};