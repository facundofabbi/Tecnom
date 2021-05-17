const express = require('express');
const app=express();
const path= require('path');


app.set('port', 4000)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
})

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'),()=>{
    console.log("hola")
})