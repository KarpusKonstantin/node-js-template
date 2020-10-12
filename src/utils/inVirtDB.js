const User = require('../resources/users/user.model');

const db = {
  Users: [],
  Boards: [],
  Tasks: []
};

(() => {
  for (let i = 0; i < 3; i++) {
    db.Users.push(new User());
  }

  console.log('Users List: ', db.Users);
})();

const getAllEntities = () => {
  return db['Users'].filter(el => el);
};

const getRecord = id => {
  return db.Users.find(el => el.id === id);
};

const updateRecord = async (id, updatedProperties) => {
  const index = db.Users.findIndex(el => el.id === id);

  if (index > -1) {
    db.Users[index] = { ...db.Users[index], ...updatedProperties };
  }

  return db.Users[index];
};

const postRecord = async obj => {
  db.Users.push(obj);

  return obj;
};

const deleteRecord = async id => {
  const index = db.Users.findIndex(el => el.id === id);

  db.Users.splice(index, 1);

  return await getRecord(id);
};

module.exports = {
  getAllEntities,
  getRecord,
  updateRecord,
  postRecord,
  deleteRecord
};
