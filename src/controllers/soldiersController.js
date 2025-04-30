const soldiersService = require('../services/soldiersService');

exports.getAllSoldiers = (req, res) => {
  try {
    const soldiers = soldiersService.getAllSoldiers();
    res.json(soldiers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSoldierById = (req, res) => {
  try {
    const { id } = req.params;
    const soldier = soldiersService.getSoldierById(id);
    if (!soldier) {
      return res.status(404).json({ error: 'Soldier not found' });
    }
    res.json(soldier);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSoldier = (req, res) => {
  try {
    const soldierData = req.body;
    const newSoldier = soldiersService.createSoldier(soldierData);
    res.status(201).json(newSoldier);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSoldier = (req, res) => {
  try {
    const { id } = req.params;
    const soldierData = req.body;
    const updatedSoldier = soldiersService.updateSoldier(id, soldierData);
    if (!updatedSoldier) {
      return res.status(404).json({ error: 'Soldier not found' });
    }
    res.json(updatedSoldier);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSoldier = (req, res) => {
  try {
    const { id } = req.params;
    const deleted = soldiersService.deleteSoldier(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Soldier not found' });
    }
    res.json({ message: 'Soldier deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
