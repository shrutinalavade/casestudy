const { Router } = require('express');
const carController = require('../controller/carController');
const bodyParser = require('body-parser');
const {requireAuth} = require('../middleware/authMiddleware')

const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

router.get('/cars',requireAuth,carController.get_cars);


router.get('/cars/:id',requireAuth,carController.get_car);

router.post('/cars',requireAuth,urlencodedparser,carController.post_cars);


router.put('/cars/:id',requireAuth,urlencodedparser,carController.put_cars);


router.delete('/cars/:id',requireAuth,carController.delete_cars);


module.exports = router;