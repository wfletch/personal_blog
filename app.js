const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const BlogPost = require('./models/blogpost');
const morgan = require('morgan');
// Always use App
app.use(
    morgan('dev')
);
// Example of pretty useless middleware.
app.use((req, res, next) => {
    next();
})
// Add the Reqeust Date to all incoming requests.
var requestDate = (req, res, next) => {
    req.requestDate = Date.now();
    next();
};
//  Useless Middleware
app.use((req,res,next) => {
    req.is_warren_pretty = true;
    next();
});
app.use (requestDate);
// App Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
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

// Set up default app routes.
app.listen(3000, () => {
    console.log("Serving on Port 3000");
})

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/blog', async (req, res) => {
    const allPosts = await BlogPost.find({});
    // console.log(allPosts);
    res.render('blog/index', { allPosts });

})
app.get('/blog/:id', async (req, res) => {
    const blogPost = await BlogPost.findById(req.params.id);
    res.render('blog/entry', { blogPost });
})
