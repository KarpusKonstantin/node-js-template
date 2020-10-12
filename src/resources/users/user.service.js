const usersRepo = require('./user.memory.repository');

const getAll = tableName => usersRepo.getAll(tableName);

const getRecord = (tableName, id) => usersRepo.getRecord(tableName, id);

const updateRecord = (tableName, id, updatedProperties) => {
  return usersRepo.updateRecord(tableName, id, updatedProperties);
};

const postRecord = (tableName, obj) => {
  return usersRepo.postRecord(tableName, obj);
};

const deleteRecord = (tableName, id) => {
  return usersRepo.deleteRecord(tableName, id);
};

module.exports = { getAll, getRecord, updateRecord, postRecord, deleteRecord };
