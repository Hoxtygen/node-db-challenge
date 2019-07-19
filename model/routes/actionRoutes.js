const express = require('express');

const router = express.Router();
const actionModel = require('../helpers/actionModel.js');

router.get('/', async (req, res) => {
  try {
    const actionData = await actionModel.get();
    res.status(200).json(actionData);
  } catch (error) {
    res.status(500).json({
      errorMessage: error,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [action] = await actionModel.getById(id);

    if (action) {
      res.json(action);
    } else {
      res.status(404).json({ message: 'Could not find action with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get actions' });
  }
});
module.exports = router;
