import { Sprite } from 'pixi.js';

export default class Fish extends Sprite {
  constructor() {
    const app = new PIXI.Application({
      width: 500,
      height: 500,
      background: 000
    });

    // Add the view to the DOM
    document.body.appendChild(app.view);
   

  }

  expand() {

  }

  contract() {

  }
}