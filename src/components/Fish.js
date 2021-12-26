import { Sprite } from 'pixi.js';

export default class Fish extends Sprite {
  constructor() {
    super();

    const __PIXI_APP = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(__PIXI_APP.view);

    // Add a container to center our sprite stack on the page
    const container = new PIXI.Container();
    container.x = __PIXI_APP.screen.width / 2;
    container.y = __PIXI_APP.screen.height / 2;
    __PIXI_APP.stage.addChild(container);
  }

  expand() {
    console.log("test");

  }

  contract() {

  }
}

