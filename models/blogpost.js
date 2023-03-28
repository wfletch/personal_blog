const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    publish_date: String,
    author: String,
});

module.exports = mongoose.model('Blogpost', BlogPostSchema);