const USERS_TABLE_NAME = 'Boards';

const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll(USERS_TABLE_NAME);
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getRecord(USERS_TABLE_NAME, req.params.id);
  res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  try {
    const board = await boardService.updateRecord(
      USERS_TABLE_NAME,
      req.params.id,
      req.body
    );
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status('404').send(error.message);
  }
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardService.postRecord(
    USERS_TABLE_NAME,
    new Board({
      title: req.body.title,
      columns: req.body.columns
    })
  );

  res.json(Board.toResponse(newBoard));
});

router.route('/:id').delete(async (req, res) => {
  await boardService.deleteRecord(USERS_TABLE_NAME, req.params.id);
  const boards = await boardService.getAll(USERS_TABLE_NAME);
  res.status(204).json(boards.map(Board.toResponse));
});

module.exports = router;
