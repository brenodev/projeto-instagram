const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server);

// conexão com MONGODB 
mongoose.connect('mongodb+srv://brenodev:breno0116@cluster0-nujg2.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.io = io;
  
  next();
});

//permite qualquer app acecssar o beckend
app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333)