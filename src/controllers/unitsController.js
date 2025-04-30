const unitsService = require('../services/unitsService');

exports.getAllUnits = (req, res) => {
  try {
    const units = unitsService.getAllUnits();
    res.json(units);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUnitById = (req, res) => {
  try {
    const { id } = req.params;
    const unit = unitsService.getUnitById(id);
    if (!unit) {
      return res.status(404).json({ error: 'Unit not found' });
    }
    res.json(unit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUnit = (req, res) => {
  try {
    const unitData = req.body;
    const newUnit = unitsService.createUnit(unitData);
    res.status(201).json(newUnit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUnit = (req, res) => {
  try {
    const { id } = req.params;
    const unitData = req.body;
    const updatedUnit = unitsService.updateUnit(id, unitData);
    if (!updatedUnit) {
      return res.status(404).json({ error: 'Unit not found' });
    }
    res.json(updatedUnit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUnit = (req, res) => {
  try {
    const { id } = req.params;
    const deleted = unitsService.deleteUnit(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Unit not found' });
    }
    res.json({ message: 'Unit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
