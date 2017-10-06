const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();



app.use(express.static('public'));
app.listen(process.env.PORT || 8080);
