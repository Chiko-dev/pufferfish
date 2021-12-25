import { Sprite } from 'pixi.js';

export default class Fish extends Sprite {
  constructor() {
    const app = new PIXI.Application();

    const scene = new PIXI.Container();
    app.stage.addChild(scene);
  }

  expand() {

  }

  contract() {

  }
}