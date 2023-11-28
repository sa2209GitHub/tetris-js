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

    return piece;
  }

  movePieceLeft() {
    this.activePiece.x -= 1;

    if (this.hasCollision()) {
      this.activePiece.x += 1;

      return false;
    }

    return true;
  }

  movePieceRight() {
    this.activePiece.x += 1;

    if (this.hasCollision()) {
      this.activePiece.x -= 1;

      return false;
    }

    return true;
  }

  movePieceDown() {
    this.activePiece.y += 1;

    if (this.hasCollision()) {
      this.activePiece.y -= 1;
      this.lockPiece();

      return false;
    }

    return true;
  }

  rotatePiece(clockwise = true) {
    const { blocks } = this.activePiece;
    const length = blocks.length - 1;

    for (let y = 0; y < Math.floor((length + 1) / 2); y++) {
      for (let x = y; x < length - y; x++) {
        let temp = blocks[y][x];

        if (clockwise) {
          blocks[y][x] = blocks[length - x][y];
          blocks[length - x][y] = blocks[length - y][length - x];
          blocks[length - y][length - x] = blocks[x][length - y];
          blocks[x][length - y] = temp;
        } else {
          blocks[y][x] = blocks[x][length - y];
          blocks[x][length - y] = blocks[length - y][length - x];
          blocks[length - y][length - x] = blocks[length - x][y];
          blocks[length - x][y] = temp;
        }
      }
    }

    if (this.hasCollision()) {
      if (clockwise) {
        this.rotatePiece(false)
      } else {
        this.rotatePiece(true)
      }

      return false
    }

    return true;
  }

  lockPiece() {
    const { x: left, y: top, blocks } = this.activePiece;

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y][x]) {
          this.playfield[top + y][left + x] = blocks[y][x];
        }
      }
    }
  }

  hasCollision() {
    const { x: left, y: top, blocks } = this.activePiece;

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y][x]) {
          if (this.playfield[top + y] === undefined) {
            return true;
          }
          if (this.playfield[top + y][left + x] === undefined) {
            return true;
          }
          if (this.playfield[top + y][left + x] !== 0) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
