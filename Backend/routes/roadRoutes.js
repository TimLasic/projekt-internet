var express = require('express');
var router = express.Router();
var roadController = require('../controllers/roadController.js');

/*
 * GET
 */
router.get('/', roadController.list);

/*
 * GET
 */
router.get('/:id', roadController.show);

/*
 * POST
 */
router.post('/', roadController.create);

/*
 * PUT
 */
router.put('/:id', roadController.update);

/*
 * DELETE
 */
router.delete('/:id', roadController.remove);

module.exports = router;
