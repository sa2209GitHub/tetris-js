import Game from "./Game.js";
import View from "./View.js";

const root = document.getElementById("root");

const game = new Game();
const view = new View(root, 320, 640, 20, 10);

window.view = view;
window.game = game;

view.renderPlayfield(game.getState())
