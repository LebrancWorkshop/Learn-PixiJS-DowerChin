import { PIXI, app } from './renderer';
import { config } from './config';

document.body.appendChild(app.view);
app.renderer.background.color = config.backgroundColor;

// Setup.

// Init.

// Player.
const player = PIXI.Sprite.from('/assets/image/spritesheet/raider/Raider_1/Idle.png');
player.anchor.set(0.5);
player.x = 100;
player.y = 100;
app.stage.addChild(player);

// Mouse Interactions.
app.stage.interactive = true;
app.stage.on('pointermove', movePlayer);

function movePlayer(event: PIXI.FederatedMouseEvent) {
  let position = event.data.global;
  player.x = position.x;
  player.y = position.y;
  console.log(position);
};


// Game Loop.
app.ticker.add((deltaTime: number) => loop(deltaTime));

function loop(deltaTime: number) {
  // Update.
  app.stage.addChild(player);


  // Render.


  console.log(`Delta Time: ${deltaTime}`);
  console.log(`FPS: ${app.ticker.FPS}`);
};
