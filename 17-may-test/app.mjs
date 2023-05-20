// const express = require('express');
import express from 'express';


// const x = require('express')

// ES6 import types
// import { userRouter } from './routes/user/user.mjs';                 -- 2
// import userRouet from './routes/user/user.mjs';                      -- 1
// import { userRouter as user } from './routes/user/user.mjs';         -- 2
import * as user from './routes/user/user.mjs';

// import our default middleware
import { extractToken } from './middleware/extract-token.mjs';

const app = express();


// 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custome middleware
// /user
app.use('/', (req, res, next) => {
    console.log('Reuqest Hostanem ' + req.hostname);
    next();
})


// 
app.use('/user' ,(req, res, next) => {
    extractToken();
    next();
})



// User routes
app.use('/user', extractToken,user.userRouter);



app.get('/', (req, res) => {
    res.send('Hello');
});




// Request reamins pending until closed by the server
app.get('/test-not-closed', (req, res) => {
    console.log('asdasdsa');

    res.redirect('/json');
    // End the request with empty response and status 200
    // res.status(200).end();
});

// Sending a json object
app.get('/json', extractToken, (req, res) => {
    let obj = {
        name: 'Hi',
        surename: 'HH'
    }
    res.json(obj);
});


// Read json object from the request body
// send the object back
app.post('/json', (req, res) => {
    let obj = req.body;
    console.log(obj);
    res.json(obj);
});


// Start the server on port 50000
const port = 5000;
app.listen(port, () => {
    console.log(`Listeining on port ${port}`);
})