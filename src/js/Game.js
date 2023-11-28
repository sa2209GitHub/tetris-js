export default class Game {
  score = null;
  lines = null;
  level = null;

  playfield = null;
  rows = null;
  columns = null;

  activePiece = null;
  nextPiece = null;

  constructor(rows = 20, columns = 10) {
    this.rows = rows;
    this.columns = columns;

    this.playfield = this.createPlayfield();
    this.activePiece = this.getNextPiece();
    this.nextPiece = this.getNextPiece();
  }

  createPlayfield() {
    return Array(this.rows).fill().map(() => Array(this.columns).fill(0));
  }

  getNextPiece() {
    const type = "IOTSZJL"[Math.floor(Math.random() * 7)];
    const piece = new Object();

    const pieces = {
      "I": [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      "O": [
        [0, 0, 0, 0],
        [0, 2, 2, 0],
        [0, 2, 2, 0],
        [0, 0, 0, 0],
      ],
      "T": [
        [0, 0, 0],
        [3, 3, 3],
        [0, 3, 0],
      ],
      "S": [
        [0, 0, 0],
        [0, 4, 4],
        [4, 4, 0],
      ],
      "Z": [
        [0, 0, 0],
        [5, 5, 0],
        [0, 5, 5],
      ],
      "J": [
        [0, 0, 0],
        [6, 6, 6],
        [0, 0, 6],
      ],
      "L": [
        [0, 0, 0],
        [7, 7, 7],
        [7, 0, 0],
      ],
    };

    piece.x = 0;
    piece.y = 0;
    piece.blocks = pieces[type];

    return piece
  }
}
