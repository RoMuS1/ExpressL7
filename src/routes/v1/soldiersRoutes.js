const express = require('express');
const router = express.Router();
const soldiersController = require('../../controllers/soldiersController');

router.get('/soldiers', soldiersController.getAllSoldiers);
router.get('/soldiers/:id', soldiersController.getSoldierById);
router.post('/soldiers', soldiersController.createSoldier);
router.put('/soldiers/:id', soldiersController.updateSoldier);
router.delete('/soldiers/:id', soldiersController.deleteSoldier);

module.exports = router;
