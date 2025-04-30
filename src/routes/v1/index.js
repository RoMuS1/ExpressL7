const express = require('express');
const router = express.Router();

const soldiersRoutes = require('./soldiersRoutes');
const unitsRoutes = require('./unitsRoutes');

router.use(soldiersRoutes);
router.use(unitsRoutes);

module.exports = router;
