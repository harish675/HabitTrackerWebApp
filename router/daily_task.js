const express = require('express');
const router = express.Router();
const dailyTaskController = require('../controllers/dailyTask_controller');


router.get('/mark-as-complete',dailyTaskController.markAsCompleted);
router.get('/mark-as-not-complete',dailyTaskController.markAsNotCompleted);
router.get('/skip',dailyTaskController.skip);

router.get('/create-for-done',dailyTaskController.createForDone);
router.get('/create-for-not-done',dailyTaskController.createForNotDone);
router.get('/create-for-skip',dailyTaskController.createForSkip);
module.exports = router;