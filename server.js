const express = require('express');
const projectRouter = require('./model/routes/projectRoutes.js');


const server = express();
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Lambda node sprint challenge, do make yourself at home as you peruse through the project',
  });
});

module.exports = server;
