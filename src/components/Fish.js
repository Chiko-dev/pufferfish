import { Sprite } from 'pixi.js';

export default class Fish extends Sprite {
  constructor() {
    super();

    this.name = "fish"


  }

  expand() {
    console.log("test");

  }

  contract() {

  }
}

