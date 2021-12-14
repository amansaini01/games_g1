
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
})





//Listen On Server
app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("\n*** Connection Successfully Established ***")
        console.log("Server Started At Port 3000");
    }

});