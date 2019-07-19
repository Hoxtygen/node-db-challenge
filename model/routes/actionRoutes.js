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

module.exports = router;
