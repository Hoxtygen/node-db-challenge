const db = require('../dbConfig.js');

function get() {
  return db('actions');
}

module.exports = {
  get,
}
;