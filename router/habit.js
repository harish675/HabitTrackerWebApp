const express = require('express');
const router = express.Router();

const habitController = require('../controllers/habit_controllers');

router.post('/create',habitController.create);
router.get('/delete',habitController.destroy);


module.exports = router;