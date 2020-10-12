const DB = require('../../utils/inVirtDB');

const getAll = async () => {
  return DB.getAllEntities();
};

const getRecord = async id => {
  return DB.getRecord(id);
};

const updateRecord = async (id, updatedProperties) => {
  const user = await DB.updateRecord(id, updatedProperties);
  return user;
};

const postRecord = async obj => {
  return await DB.postRecord(obj);
};

const deleteRecord = async id => {
  return await DB.deleteRecord(id);
};

module.exports = { getAll, getRecord, updateRecord, postRecord, deleteRecord };
