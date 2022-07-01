const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

//API config
const app = express();

//Middleware
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/',(request,response)=> response.status(200).send('Hello world!'))

//listen command
exports.api = functions.https.onRequest(app)

example endpoint
http://localhost:5001/syscosystems-ezonee/us-central1/api