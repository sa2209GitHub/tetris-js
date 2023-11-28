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
  }

  createPlayfield() {
    return playfield = Array(this.rows).fill().map(() =>
      Array(this.columns).fill(0)
    );
  }
}
