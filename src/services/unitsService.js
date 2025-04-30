const { v4: uuidv4 } = require('uuid');
const db = require('../db/db');

function getAllUnits() {
  const data = db.readDB();
  return data.units || [];
}

function getUnitById(id) {
  const units = getAllUnits();
  return units.find(u => u.id === id);
}

function createUnit(data) {
  const newUnit = {
    id: uuidv4(),
    name: data.name || 'Default Unit',
    headCount: data.headCount || 100,
    isDeployed: data.isDeployed !== undefined ? data.isDeployed : false,
    formationDate: data.formationDate || new Date().toLocaleString(),
    operations: data.operations || []
  };

  const dbData = db.readDB();
  dbData.units = dbData.units || [];
  dbData.units.push(newUnit);
  db.writeDB(dbData);
  return newUnit;
}

function updateUnit(id, updateData) {
  const dbData = db.readDB();
  const units = dbData.units || [];
  const index = units.findIndex(u => u.id === id);
  if (index === -1) return null;
  const updatedUnit = { ...units[index], ...updateData };
  dbData.units[index] = updatedUnit;
  db.writeDB(dbData);
  return updatedUnit;
}

function deleteUnit(id) {
  const dbData = db.readDB();
  const units = dbData.units || [];
  const index = units.findIndex(u => u.id === id);
  if (index === -1) return false;
  units.splice(index, 1);
  db.writeDB(dbData);
  return true;
}

module.exports = {
  getAllUnits,
  getUnitById,
  createUnit,
  updateUnit,
  deleteUnit,
};
