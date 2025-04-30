const { v4: uuidv4 } = require('uuid');
const db = require('../db/db');

function getAllSoldiers() {
  const data = db.readDB();
  return data.soldiers || [];
}

function getSoldierById(id) {
  const soldiers = getAllSoldiers();
  return soldiers.find(s => s.id === id);
}

function createSoldier(data) {
  const newSoldier = {
    id: uuidv4(),
    name: data.name || 'Default Soldier',
    age: data.age || 25,
    active: data.active !== undefined ? data.active : true,
    rank: data.rank || 'Private',
    enlistmentDate: data.enlistmentDate || new Date().toLocaleString(),
    skills: data.skills || []
  };

  const dbData = db.readDB();
  dbData.soldiers = dbData.soldiers || [];
  dbData.soldiers.push(newSoldier);
  db.writeDB(dbData);
  return newSoldier;
}

function updateSoldier(id, updateData) {
  const dbData = db.readDB();
  const soldiers = dbData.soldiers || [];
  const index = soldiers.findIndex(s => s.id === id);
  if (index === -1) return null;
  const updatedSoldier = { ...soldiers[index], ...updateData };
  dbData.soldiers[index] = updatedSoldier;
  db.writeDB(dbData);
  return updatedSoldier;
}

function deleteSoldier(id) {
  const dbData = db.readDB();
  const soldiers = dbData.soldiers || [];
  const index = soldiers.findIndex(s => s.id === id);
  if (index === -1) return false;
  soldiers.splice(index, 1);
  db.writeDB(dbData);
  return true;
}

module.exports = {
  getAllSoldiers,
  getSoldierById,
  createSoldier,
  updateSoldier,
  deleteSoldier,
};
