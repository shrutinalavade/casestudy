const carController = require('../controllers/carController');
const {requireAuth} = require('../middleware/authMiddleware');
const {Router} = require('express');
const router = Router();



router.get('/cars',requireAuth,carController.get_cars);

module.exports = router;