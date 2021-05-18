/*import Amplify from 'aws-amplify'
import config from './aws-exports'
import express from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';*/
const Amplify = require('aws-amplify')
//const config = require('./aws-exports')
const express = require('express')
const path = require('path')
const url = require('url')
const dirname= require('path')
//const __filename = url.fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

const app=express();

Amplify.default.configure({
    "aws_project_region": "us-east-2"
})

app.set('port', 4000)

app.get('/',(req,res)=>{
    res.send("hola")
    //res.sendFile(path.join(__dirname,'views/index.html'));
})

//app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'),()=>{
    console.log("tecnom")
})