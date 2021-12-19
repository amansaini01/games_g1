
const express = require('express'),
    app = express(),
    bodyParser = require("body-parser");

app.use(express.static('public'));



app.use(require("express-session")({
    secret: "Any normal Word",       //decode or encode session
    resave: false,
    saveUninitialized: false
}));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded ({ extended: true }))


//=======================
//      R O U T E S
//=======================

app.get("/", (req, res) => {
    res.render("home");
});


app.get("/gamepage", (req, res) => {
    res.render("gamepage");
});



// RPS game part 

app.get('/rps_intro', function (req, res) {
    res.sendFile('rps_intro.html', { root: './public/rps' });
});

app.get('/rps', function (req, res) {
    res.sendFile('rps.html', { root: './public/rps' });
});






//Listen On Server
port = 8080
app.listen(process.env.PORT || port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("\n*** Connection Successfully Established ***")
        console.log("Server Started At Port " + port);
    }

});