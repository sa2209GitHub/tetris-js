export default class Controller {
  game = null;
  view = null;

  constructor(game, view) {
    this.game = game;
    this.view = view;

    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    if (event.key === "ArrowLeft" || event.key === "h") {
      game.movePieceLeft();
      view.render(game.getState());

      return true;
    }

    if (event.key === "ArrowRight" || event.key === "l") {
      game.movePieceRight();
      view.render(game.getState());

      return true;
    }

    if (event.key === "ArrowUp" || event.key === "k") {
      game.rotatePiece();
      view.render(game.getState());

      return true;
    }

    if (event.key === "ArrowDown" || event.key === "j") {
      game.movePieceDown();
      view.render(game.getState());

      return true;
    }

    if (event.key === " ") {
      game.dropPiece();
      view.render(game.getState());

      return true;
    }
  }
}
