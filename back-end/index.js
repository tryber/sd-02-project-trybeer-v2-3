const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();

const { errorController } = require('./controllers/errorController');
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');
const ordersRoute = require('./routes/ordersRoute');

const app = express();
app.use(express.json());
app.use(cors({ allowedHeaders: '*' }));
app.use('/', express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', usersRoute);
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

app.use(errorController);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Port: ${port}, Prod`);
});
