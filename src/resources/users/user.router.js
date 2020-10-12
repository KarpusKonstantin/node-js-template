const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getRecord(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  try {
    const user = await usersService.updateRecord(req.params.id, req.body);
    res.json(User.toResponse(user));
  } catch (error) {
    res.status('404').send(error.message);
  }
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.postRecord(
    new User({
      name: req.body.name,
      login: req.body.login,
      password: req.body.password
    })
  );

  res.json(User.toResponse(newUser));
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteRecord(req.params.id);
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

module.exports = router;
