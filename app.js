const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,


});
app.listen(3000, () => {
    console.log("Serving on Port 3000");
})

app.get('/', (req, res) => {
    res.render('home');
})