
const mongoose = require('mongoose');
const BlogPost = require('../models/blogpost');

let args = process.argv.slice(2);
let entries = 1
if (args.length == 1) {
    entries = args[0];
}
console.log("Cleaning Entries and Creating ", entries, " Test Entries");
//DB Settings using Mongoose
mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => {
    console.log("Opened Conection to DB");
})
// We are in business
const seedDb = async () => {
    await BlogPost.deleteMany({});
    for (let i = 0; i < entries; i++) {
        const default_blog = new BlogPost({
            title: "Test",
            publish_date: "N/A",
            author: "N/A"
        });
        await default_blog.save();
    }
};
seedDb();