import { Sprite } from 'pixi.js';

export default class Fish extends Sprite {
  constructor() {
    super();
    const app = new PIXI.Application();

    const scene = new PIXI.Container();
    app.stage.addChild(scene);

    this.expand();
  }

  expand() {
    console.log("test");

  }

  contract() {

  }
}