const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');

function readDB() {
  if (!fs.existsSync(dbPath)) {
    const initialData = { soldiers: [], units: [] };
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
    return initialData;
  }
  const data = fs.readFileSync(dbPath, 'utf8');
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error('Error parsing db.json:', err);
    return { soldiers: [], units: [] };
  }
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

module.exports = {
  readDB,
  writeDB
};
