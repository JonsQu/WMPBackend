const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const plant = require('./routes/plants.route');
const app = express();
const URL = 'mongodb://wmp:j00natan@ds133533.mlab.com:33533/watermyplants';


//connect to database
mongoose.connect(URL);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/plants', plant);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if(err){
        console.error(err);
    }else{
        console.log('App listen on port: ', PORT);
    }
});