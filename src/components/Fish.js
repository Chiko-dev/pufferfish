import { Sprite } from 'pixi.js';

export default class Fish extends Sprite {
  constructor() {
    super();
    const __PIXI_APP = new PIXI.Application();

    const scene = new PIXI.Container();
    __PIXI_APP.stage.addChild(scene);

    this.expand();
  }

  expand() {
    console.log("test");

  }

  contract() {

  }
}

