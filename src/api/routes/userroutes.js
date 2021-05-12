const router = require('express').Router();
const {
    HomepageController,
    SignupController
} = require('../controllers/usercontrollers');

/**
 * @route GET /user/
 * @desc testing route
 * @access Public
 */
router.get('/', HomepageController);

/**
 * @route POST /user/signup
 * @desc signups the user
 * @access Public
 */
router.post('/signup', SignupController);


module.exports = router;