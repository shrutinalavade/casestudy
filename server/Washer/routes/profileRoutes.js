const { Router } = require('express');
const bodyParser = require('body-parser');
const profileController = require('../controllers/profileController');
const {requireAuth} = require('../middleware/authMiddleware')

const router = Router();
const urlencodedParser = bodyParser.urlencoded({extended:true});

//Profile route handlers


/**
 * @swagger
 * /profile:
 *  post:
 *    tags: ['Profile']
 *    description: create a new profile
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/profile', urlencodedParser,requireAuth, profileController.post_profile);
/**
 * @swagger
 * /profile:
 *  get:
 *    tags: ['Profile']
 *    description: get a specific washers profile
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/profile',urlencodedParser,requireAuth , profileController.get_specific_profile);
/**
 * @swagger
 * /profile:
 *  put:
 *    tags: ['Profile']
 *    description: update the profile
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */

router.put('/profile',urlencodedParser, requireAuth ,profileController.update_profile);


module.exports = router;