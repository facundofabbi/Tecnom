import Amplify from 'aws-amplify'
import config from './aws-exports.js'
import express from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app=express();


Amplify.default.configure(config)


app.set('port', 4000)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
})

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'),()=>{
    console.log("tecnom")
})