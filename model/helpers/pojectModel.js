const knex = require('knex');
const config = require('../../knexfile.js');
const db = require('../dbConfig.js');

function get() {
  return db('projects');
}


module.exports = {
  get,
};
