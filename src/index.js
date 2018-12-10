const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose.connect('mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST, {
useNewUrlParser: true
});

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, ()=>{
    console.log('Server started on port 3000');
});