import * as PIXI from "pixi.js";

import Application from "./core/Application";

if (process.env.NODE_ENV === "development") {
  // required for pixi dev tools to work
  window.PIXI = PIXI;
}

const app = new Application();

window.__PIXI_APP = app;

export default __PIXI_APP;
