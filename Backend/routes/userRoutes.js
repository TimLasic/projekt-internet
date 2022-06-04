var express = require('express');
var router = express.Router();
var multer = require('multer');
//var upload = multer({storage: storage});
var upload = multer({dest: "./uploads"});

/*var storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});*/

var userController = require('../controllers/userController.js');


/*
 * GET
 */
router.get('/', userController.list);

/*
 * GET
 */
router.get('/profile', userController.profile);
router.get('/pyscript', userController.pyscript); //TODO
router.get('/logout', userController.logout);
router.get('/:id', userController.show);

/*
 * POST
 */
router.post('/', userController.create);
router.post('/login', userController.login);

router.post('/upload', upload.single('image'), userController.upload);
//router.post('/face_recognize/:id', upload.single('image'),userController.face_recognize);

/*
 * PUT
 */
router.put('/:id', userController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.remove);

module.exports = router;
