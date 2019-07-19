const db = require('../dbConfig.js');

function get() {
  return db('actions');
}

async function getActionById(id) {
  const action = await db('actions')
    .where('id', id)
    .first();
  action.completed = !!action.completed;
  return action;
}

async function addAction(action) {
  return db('actions')
    .insert(action)
    .then(([id]) => this.getActionById(id));
}

module.exports = {
  get,
  addAction,
  getActionById,
};
