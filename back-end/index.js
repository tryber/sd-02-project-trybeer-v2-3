const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');

const socketIoServer = require('http').createServer();
const io = require('socket.io')(socketIoServer);

dotenv.config();

const { errorController } = require('./controllers/errorController');
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');
const ordersRoute = require('./routes/ordersRoute');
const messagesRoute = require('./routes/messagesRoute');

const app = express();

app.use(express.json());
app.use(cors({ allowedHeaders: '*' }));
app.use('/', express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: false }));

io.on('connection', (socket) => {
  socket.on('new message', async () => {
    io.emit('new message', { message: 'oi' });
  });
});

app.use('/user', usersRoute);
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);
app.use('/messages', messagesRoute);

app.use(errorController);

io.on('connection', (socket) => {
  console.log('conectou');
  socket.on('disconnect', () => {
    console.log('Client desconectado');
  });

  socket.on('new message', ({ messages, email }) => {
    io.emit('update message', { msg: messages, email });
  });
});

app.use('*', (_req, res) => res.status(404).json({
  message: 'route not found',
  code: 'not_found',
}));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Port: ${port}, Prod`);
});

socketIoServer.listen(4555);
console.log('Socket.io ouvindo na porta 4555');
