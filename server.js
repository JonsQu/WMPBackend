const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const app = express();
const URL = 'mongodb://wmp:j00natan@ds133533.mlab.com:33533/watermyplants';
//connect to database
mongoClient.connect(URL, function(err, db){
    if(err){
        console.error(err);
    }else{
        console.log('We are connected');
    }
    db.close();
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if(err){
        console.error(err);
    }else{
        console.log('App listen on port: ', PORT);
    }
});