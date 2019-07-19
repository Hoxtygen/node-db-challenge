const knex = require('knex');
const config = require('../../knexfile.js');
const db = require('../dbConfig.js');

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects').where({ id });
}

async function add(projectData) {
  const id = await db('schemes')
    .insert(projectData);
  return getById(id);
}


module.exports = {
  get,
  getById,
  add,
};


/*


function insert(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => this.get(id));
} */
