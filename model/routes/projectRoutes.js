const express = require('express');

const router = express.Router();
const projects = require('../helpers/pojectModel.js');

router.get('/', async (req, res) => {
  try {
    const [projectsData] = await projects.get();
    res.status(200).json(projectsData);
  } catch (error) {
    res.status(500).json({
      errorMessage: error,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [project] = await projects.getById(id);

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
});

module.exports = router;
