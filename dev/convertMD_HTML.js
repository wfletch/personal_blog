const showdown = require("showdown");
const fs = require('fs');
let args = process.argv.slice(2);
let cur_path = __dirname;
let converter = new showdown.Converter();
let html = ""
console.log(cur_path + "/" + args[0])
fs.readFile(cur_path + "/" + args[0], 'utf8', (err, data) => {
    console.log(data);
    html = converter.makeHtml(data);
    fs.writeFileSync(cur_path + "/" + args[0].slice(0,-3) + ".html", html);
});



