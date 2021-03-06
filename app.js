const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const today = new Date();
const day = today.getDate(); // 24
const month = today.getMonth(); // 10 (Month is 0-based, so 10 means 11th Month)
const year = today.getFullYear();

app.get("/", function(req, res) {
    res.render("index", { heading: "ग्राम प्रधान द्वारा प्रमाण पत्र निर्माण पोर्टल ", headingbelow: "(ग्राम भनुपुरा)" });
})
app.get("/resume", function(req, res) {
    res.render("resume");
})

app.get("/letterpad", function(req, res) {

    res.render("letterpad", { day: day, month: month + 1, year: year, heading: "ग्राम प्रधान पोर्टल (ग्राम भनुपुरा)", headingbelow: "लेटरपैड पर लिखें " });
})


app.get("/main", function(req, res) {
    var post = req.body.postBody;
    res.render("main", { headingbelow: "प्रधान द्वारा प्रमाणित प्रमाण पत्र", heading: "ग्राम प्रधान पोर्टल (ग्राम भनुपुरा)" });
})

app.get("/praman", function(req, res) {

    res.render("praman", { name: ".........", fname: "..............", aay: " ", income: "", rupaye: " " });
});



app.post("/", function(req, res) {
    var name = req.body.name;
    var fname = req.body.fname;
    var pramantype = req.body.type;

    if (pramantype === "आय प्रमाणपत्र") {
        var income = req.body.income;
        res.render("praman", { name: name, fname: fname, jaati: "अहीर ", upjaati: "अहीर ", aay: "तथा इनके माता पिता द्वारा होने वाली कुल वार्षिक आय ₹", rupaye: " है", type: pramantype, income: income, day: day, month: month + 1, year: year, headingbelow: "", heading: "प्रधान द्वारा प्रमाणित प्रमाण पत्र" });
    } else {
        res.render("praman", {
            name: name,
            fname: fname,
            jaati: "अहीर",
            upjaati: "अहीर",
            aay: " ",
            income: " ",
            rupaye: " ",
            type: pramantype,
            day: day,
            month: month + 1,
            year: year,
            headingbelow: "",
            heading: "प्रधान द्वारा प्रमाणित प्रमाण पत्र"
        });
    }




})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}


app.listen(port, function() {
    console.log("Server has been started succesfully");
});