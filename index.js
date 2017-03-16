'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/musicfy-db', (err,res) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("La base de datos esta lista");
    }
});