import { PIXI, app } from './renderer';
import { config } from './config';
import { IKey } from './@types';

document.body.appendChild(app.view);
app.renderer.background.color = config.backgroundColor;

// Setup.
let keys: IKey = {};
let speed = 10;

// Init.
const player = PIXI.Sprite.from('/assets/image/spritesheet/knight/png/Idle (1).png');
player.anchor.set(0.5);
player.x = app.view.width / 2;
player.y = app.view.height / 2;
app.stage.addChild(player);

window.addEventListener('keydown', keydownHandler);
window.addEventListener('keyup', keyupHandler);

function keydownHandler(event: KeyboardEvent) {
  keys[event.code] = true;
};

function keyupHandler(event: KeyboardEvent) {
  keys[event.code] = false;
};

// Game Loop.
app.ticker.add((deltaTime: number) => loop(deltaTime));

function loop(deltaTime: number) {
  // Update.
  if(keys['ArrowRight']) {
    player.x += speed;
  } else if(keys['ArrowLeft']) {
    player.x -= speed;
  }

  // Render.


  console.log(`Delta Time: ${deltaTime}`);
  console.log(`FPS: ${app.ticker.FPS}`);
};
