const projectModel = require('../model/helpers/pojectModel.js');
const actionModel = require('../model/helpers/actionModel.js');

class Projects {
  static async addProject(req, res, next) {
    const newProject = {
      name: req.body.name,
      description: req.body.description,
    };
    try {
      const newProjectData = await projectModel.addProject(newProject);
      return res.status(201).json(newProjectData);
    } catch (error) {
      return next(error);
    }
  }

  static async addAction(req, res, next) {
    const newAction = {
      description: req.body.description,
      notes: req.body.notes,
      project_id: req.project.id,
    };
    try {
      const newProjectData = await actionModel.addAction(newAction);
      return res.status(201).json(newProjectData);
    } catch (error) {
      return next(error);
    }
  }

  static async getOneProject(req, res) {
    return res.status(200).send(req.project);
  }

  static async getAllProjects(req, res) {
    const projects = await projectModel.allProjects();
    return res.status(200).json({
      projects,
    });
  }

  static async removeProject(req, res) {
    const project = await projectModel.removeProject(req.project.id);
    if (project) {
      return res.status(200).json({
        message: 'project successfully deleted',
      });
    }
    return res.status(500).json({
      error: 'The project could not be removed',
    });
  }
}
module.exports = Projects;
