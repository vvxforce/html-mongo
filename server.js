var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true })


mongoose.connect("mongodb+srv://angel:WhiteAngel3662!@cluster0.b1bbq.mongodb.net/whiteangels?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true})

const notesSchema = {
    email: String
}

const Note = mongoose.model("Note", notesSchema)

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
    console.log("connect")
})

app.post("/", urlencodedParser, function(req, res) {
    console.log("it posts")
    let newNote = new Note({
        email: req.body.email
    })
    newNote.save(); 
    res.redirect("/")
})


app.listen(3000, function () {
    console.log("server is running on 3000")
}
)