var express = require('express');
var router = express.Router();
var gyroscopeController = require('../controllers/gyroscopeController.js');

/*
 * GET
 */
router.get('/', gyroscopeController.list);

/*
 * GET
 */
router.get('/:id', gyroscopeController.show);

/*
 * POST
 */
router.post('/', gyroscopeController.create);

/*
 * PUT
 */
router.put('/:id', gyroscopeController.update);

/*
 * DELETE
 */
router.delete('/:id', gyroscopeController.remove);

module.exports = router;
