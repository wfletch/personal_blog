const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Serving on Port 3000");
})

app.get('/', (req, res) => {
    res.send("Blog Test");
})