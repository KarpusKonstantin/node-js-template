const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getRecord = id => usersRepo.getRecord(id);

const updateRecord = (id, updatedProperties) => {
  return usersRepo.updateRecord(id, updatedProperties);
};

const postRecord = obj => {
  return usersRepo.postRecord(obj);
};

const deleteRecord = id => usersRepo.deleteRecord(id);

module.exports = { getAll, getRecord, updateRecord, postRecord, deleteRecord };
