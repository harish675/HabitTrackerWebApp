const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controllers');



router.get('/',homeController.homePage);
router.use('/habit',require('./habit'));
router.use('/weekly',require('./weekly'));
router.use('/daily_task',require('./daily_task'));





module.exports = router;