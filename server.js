const express = require('express');


const server = express();
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Lambda node sprint challenge, do make yourself at home as you peruse through the project',
  });
});

module.exports = server;
