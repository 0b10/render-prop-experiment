import { EventEmitter } from "events";
import { dispatcher } from "../dispatcher";

class ThemeStore extends EventEmitter {
  constructor() {
    super();
    this.darkTheme = {
      primary: "#222222"
    };

    this.lightTheme = {
      primary: "#FFFFFF"
    };

    this.handleAction = this.handleAction.bind(this);
    this.getTheme = this.getTheme.bind(this);
    this._theme = this.darkTheme;
  }

  getTheme() {
    return this._theme;
  }

  handleAction(action) {
    switch (action.type) {
      case "CHANGE_THEME":
        this.setTheme(action.theme);
        break;
      default: // Do nothing.
    }
  }

  setTheme(type) {
    switch (type) {
      case "dark":
        this._theme = this.darkTheme;
        break;
      case "light":
        this._theme = this.lightTheme;
        break;
      default:
        throw Error(`Theme type:${type} is invalid`);
    }
    this.emit("change");
  }
}

const themeStore = new ThemeStore();
dispatcher.register(themeStore.handleAction);
export { themeStore };
