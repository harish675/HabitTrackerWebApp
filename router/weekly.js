
const express = require('express');
const router = express.Router();

const weeklyController = require('../controllers/weekly_controller');

router.get('/weekly-details/',weeklyController.weekDetailsPage);

module.exports = router;