const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/artistsList',(req,res)=>{
    fs.readFile('data/artistsList.txt',(err,data)=>{
        if(err){
           return console.error(err);
        }
        return res.json(JSON.parse(data));
    });
});

app.post('/artistsList',(req,res)=>{
    const artists = req.body;
    fs.writeFile('data/artistsList.txt',JSON.stringify(artists),'utf-8',err =>{
        if(err){
            return console.error(err);
        }
        return res.sendStatus(200);
    });
});

app.listen(process.env.PORT || 3000,()=>console.log('Server ready'));