const { Router } = require('express');

const controller = require('../controllers/service_addon');
const router = Router();
const {requireAuth} = require('../middleware/authMiddleware');


router.get('/serviceplans', requireAuth,controller.get_ui_services);


router.get('/services',requireAuth,controller.get_services);


router.get('/addons/:service',requireAuth,controller.get_addons);



module.exports= router;