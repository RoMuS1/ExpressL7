const express = require('express');
const router = express.Router();
const unitsController = require('../../controllers/unitsController');

router.get('/units', unitsController.getAllUnits);
router.get('/units/:id', unitsController.getUnitById);
router.post('/units', unitsController.createUnit);
router.put('/units/:id', unitsController.updateUnit);
router.delete('/units/:id', unitsController.deleteUnit);

module.exports = router;
