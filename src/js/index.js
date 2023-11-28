import Game from "./Game.js";
import View from "./View.js";
import Controller from "./Controller.js";

const root = document.getElementById("root");

const game = new Game();
const view = new View(root, 320, 640, 20, 10);
const controller = new Controller(game, view);

window.view = view;
window.game = game;
window.controller = controller;
