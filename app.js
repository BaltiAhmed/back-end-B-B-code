const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const inscriptionRoute = require('./routes/Dinscription-routes');

const httperror = require('./models/http-error');

const mongoose = require('mongoose');

app.use(bodyparser.json());

app.use(function (req, res, next) {
    /*var err = new Error('Not Found');
     err.status = 404;
     next(err);*/

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Pass to next layer of middleware
    next();
});

app.use('/api/inscription',inscriptionRoute)

app.use((req, res, next) => {
    const error = new httperror('could not find the page', 404);
    throw error;
})

app.use((error, req, res, next) => {
    if (res.headerSent) {

        return next(error)
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'an unknown error occurred ' })
})

mongoose
    .connect('mongodb+srv://admin:G2ugo2MR3tgY0GHq@cluster0.mjysi.mongodb.net/B&B_code?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        Console.log(err)
    })


