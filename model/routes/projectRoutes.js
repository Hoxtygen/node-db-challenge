const express = require('express');

const router = express.Router();
const projects = require('../helpers/pojectModel.js');

router.get('/', async (req, res) => {
  try {
    const projectsData = await projects.get();
    res.status(200).json(projectsData);
  } catch (error) {
    res.status(500).json({
      errorMessage: error,
    });
  }
});

module.exports = router;
