const server = require('./server.js');

const PORT = process.env.PORT || 5001;


server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
