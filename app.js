const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/praman", function(req, res) {

    res.render("praman", { name: ".........", fname: ".............." });
});

app.post("/", function(req, res) {
    var name = req.body.name;
    var fname = req.body.fname;
    res.render("praman", { name: name, fname: fname, jaati: "आहीर", upjaati: "आहीर" });
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});