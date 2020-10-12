const DB = require('../../utils/inVirtDB');

const getAll = async tableName => {
  return DB.getAllEntities(tableName);
};

const getRecord = async (tableName, id) => {
  return DB.getRecord(tableName, id);
};

const updateRecord = async (tableName, id, updatedProperties) => {
  const user = await DB.updateRecord(tableName, id, updatedProperties);
  return user;
};

const postRecord = async (tableName, obj) => {
  return await DB.postRecord(tableName, obj);
};

const deleteRecord = async (tableName, id) => {
  return await DB.deleteRecord(tableName, id);
};

module.exports = { getAll, getRecord, updateRecord, postRecord, deleteRecord };
