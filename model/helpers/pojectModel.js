const db = require('../dbConfig.js');

async function getProjectById(id) {
  const project = await db('projects')
    .where('id', id)
    .first();
  if (project) {
    project.completed = !!project.completed;
    if (project) project.actions = await db('actions').where('project_id', id);
    if (project.actions) {
      project.actions.forEach((action) => {
        // eslint-disable-next-line no-param-reassign
        action.completed = !!action.completed;
      });
    }
  }
  return project;
}

async function addProject(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => this.getProjectById(id));
}

async function allProjects() {
  return db('projects').select();
}

function removeProject(id) {
  return db('projects')
    .where('id', id)
    .del();
}


module.exports = {
  getProjectById,
  addProject,
  allProjects,
  removeProject,
};
