import { PIXI, app } from './renderer';
import { config } from './config';

document.body.appendChild(app.view);
app.renderer.background.color = config.backgroundColor;

// Setup.

// Init.

// Game Loop.
app.ticker.add((deltaTime: number) => loop(deltaTime));

function loop(deltaTime: number) {
  // Update.


  // Render.


  console.log(`Delta Time: ${deltaTime}`);
  console.log(`FPS: ${app.ticker.FPS}`);
};
