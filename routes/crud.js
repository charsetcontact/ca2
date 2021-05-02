const express = require('express');

const crudController = require('../controllers/crud');

const router = express.Router();

router.post('/add', crudController.add);
router.post('/update', crudController.update);
router.get('/delete', crudController.delete);
router.get('/getall', crudController.getAll);

module.exports = router;