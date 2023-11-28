export default class View {
  element = null;

  width = null;
  height = null;

  rows = null;
  columns = null;

  canvas = null;
  context = null;

  blockWidth = null;
  blockHeight = null;

  constructor(element, width, height, rows, columns) {
    this.element = element;

    this.width = width;
    this.height = height;

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext("2d");

    this.blockWidth = this.width / columns;
    this.blockHeight = this.height / rows;

    this.element.appendChild(this.canvas);
  }

  render({ playfield }) {
    this.clearScreen();
    this.renderPlayfield(playfield);

    return true;
  }

  renderPlayfield(playfield) {
    for (let y = 0; y < playfield.length; y++) {
      const line = playfield[y];

      for (let x = 0; x < playfield[y].length; x++) {
        const block = line[x];

        if (block) {
          this.renderBlock(
            x * this.blockWidth,
            y * this.blockHeight,
            this.blockWidth,
            this.blockHeight,
            "red",
          );
        }
      }
    }

    return true;
  }

  renderBlock(x, y, width, height, color) {
    this.context.fillStyle = color; 
    this.context.strokeStyle = "black";
    this.context.lineWidth = 2;

    this.context.fillRect(x, y, width, height);
    this.context.strokeRect(x, y, width, height);

    return true;
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.width, this.height);

    return true;
  }
}
