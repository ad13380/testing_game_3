import Player from "./player.js";

let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");

// define game area size
const GAME_HEIGHT = canvas.height;
const GAME_WIDTH = canvas.width;

//ctx.fillRect(0, 600 - 30, 30, 30)
let player = new Player(GAME_HEIGHT, GAME_WIDTH);
let lastTime = 0;

// plaaceholder data
let mockData = [
  "player.moveRight()",
  "player.moveRight()",
  "player.moveRight()",
  "player.moveLeft()",
  "player.moveRight()",
  "player.moveRight()"
];

player.start(mockData);

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  player.update(deltaTime);
  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();