const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controllers');



router.get('/',homeController.homePage);
router.use('/habit',require('./habit'));








module.exports = router;