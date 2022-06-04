var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: "./uploads"});

var userController = require('../controllers/userController.js');


/*
 * GET
 */
router.get('/', userController.list);

/*
 * GET
 */
router.get('/profile', userController.profile);
router.get('/logout', userController.logout);
router.get('/:id', userController.show);

/*
 * POST
 */
router.post('/', userController.create);
router.post('/login', userController.login);
router.post('/pyscript', userController.pyscript);

router.post('/upload', upload.single('image'), userController.upload);

/*
 * PUT
 */
router.put('/:id', userController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.remove);

module.exports = router;