const db = require('../dbConfig.js');

function get() {
  return db('actions');
}

function getById(id) {
  return db('actions').where({ id });
}

function add(action) {
  return db('actions')
    .insert(action)
    .then(([id]) => this.get(id));
}

module.exports = {
  get,
  getById,
  add,
};

