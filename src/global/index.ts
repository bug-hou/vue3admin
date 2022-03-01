import { App } from "vue";
import ElementRegister from "./element-register";
import directiveRegister from "./directive-register";

export const registerElement = (app: App) => {
  ElementRegister(app);
};

export const registerDirective = (app: App) => {
  directiveRegister(app);
};
