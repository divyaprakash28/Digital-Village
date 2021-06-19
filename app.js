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
    var pramantype = req.body.type;


    const today = new Date();
    const day = today.getDate(); // 24
    const month = today.getMonth(); // 10 (Month is 0-based, so 10 means 11th Month)
    const year = today.getFullYear();
    res.render("praman", { name: name, fname: fname, jaati: "आहीर", upjaati: "आहीर", type: pramantype, day: day, month: month + 1, year: year });
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}


app.listen(port, function() {
    console.log("Server has been started succesfully");
});