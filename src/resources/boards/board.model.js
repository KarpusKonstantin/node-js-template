const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'BOARD TITLE',
    columns = { title: 'string', order: 0 }
  } = {}) {
    this.id = id;
    this.name = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;

    console.log('toResponse = ', board);

    return { id, title, columns };
  }
}

module.exports = Board;
