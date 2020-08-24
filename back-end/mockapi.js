const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');

dotenv.config();

const testRoute = require('./routes/testsRoute');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', testRoute);

app.listen(3001, () => {
  console.log('API Mockada');
});
