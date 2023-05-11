import { Settings } from "./config/index.js";
import { createApp } from "./app/index.js";

createApp().listen(Settings.port, () => {
  console.log(`Running ${Settings.port}`);
})
