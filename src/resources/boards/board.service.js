const boardRepo = require('./board.memory.repository');

const getAll = tableName => boardRepo.getAll(tableName);

const getRecord = (tableName, id) => boardRepo.getRecord(tableName, id);

const updateRecord = (tableName, id, updatedProperties) => {
  return boardRepo.updateRecord(tableName, id, updatedProperties);
};

const postRecord = (tableName, obj) => {
  return boardRepo.postRecord(tableName, obj);
};

const deleteRecord = (tableName, id) => {
  return boardRepo.deleteRecord(tableName, id);
};

module.exports = { getAll, getRecord, updateRecord, postRecord, deleteRecord };
