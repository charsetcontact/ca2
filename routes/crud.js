const express = require('express');

const crudController = require('../controllers/crud');

const router = express.Router();

router.post('/add', crudController.add);
router.patch('/update', crudController.update);
router.delete('/delete', crudController.delete);
router.get('/getall', crudController.getAll);

module.exports = router;