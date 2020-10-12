const USERS_TABLE_NAME = 'Users';

const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll(USERS_TABLE_NAME);
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getRecord(USERS_TABLE_NAME, req.params.id);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  try {
    const user = await usersService.updateRecord(
      USERS_TABLE_NAME,
      req.params.id,
      req.body
    );
    res.json(User.toResponse(user));
  } catch (error) {
    res.status('404').send(error.message);
  }
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.postRecord(
    USERS_TABLE_NAME,
    new User({
      name: req.body.name,
      login: req.body.login,
      password: req.body.password
    })
  );

  res.json(User.toResponse(newUser));
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteRecord(USERS_TABLE_NAME, req.params.id);
  const users = await usersService.getAll(USERS_TABLE_NAME);
  res.status(204).json(users.map(User.toResponse));
});

module.exports = router;
