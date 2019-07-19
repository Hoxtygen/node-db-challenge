const express = require('express');

const router = express.Router();
const ProjectsController = require('../../controller/projectsController.js');
const middlewares = require('../../middleware/index');


router.get('/:id', middlewares.validateId, ProjectsController.getOneProject);
router.get('/', ProjectsController.getAllProjects);
router.post('/', middlewares.validateProject, ProjectsController.addProject);
router.post('/:id/actions', middlewares.validateId, middlewares.validateAction, ProjectsController.addAction);

module.exports = router;
