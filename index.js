const express = require("express");
const format = require("date-format");


const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res)=>{
    res.status(201).send("<h1>Hello Bro</h1>");
})


app.get("/api/v1/instagram", (req, res)=>{
    const instaSocial = {
        username : "ichetanofficial",
        followers : 15,
        follows : 7,
        date :format.asString("dd[MM] - hh:mm:ss", new Date())
    }

    res.status(200).send(instaSocial);
})

app.get("/api/v1/facebook", (req, res)=>{
    const instaSocial = {
        username : "ichetanpage",
        followers : 44,
        follows : 12,
        date : format.asString("dd[MM] - hh:mm:ss", new Date())
    }

    res.status(200).send(instaSocial);
})
app.get("/api/v1/linkedin", (req, res)=>{
    const instaSocial = {
        username : "ichetan",
        followers : 343,
        follows : 500,
        date : format.asString("dd[MM] - hh:mm:ss", new Date())
    }

    res.status(200).send(instaSocial);
})


app.get("/api/v1/:token", (req, res)=>{
    console.log(req.params.token);
    req.status(200).send({params : req.params.token});
})


app.listen(PORT, ()=>{
    console.log("Hello World");
})