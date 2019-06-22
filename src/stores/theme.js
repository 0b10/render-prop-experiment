import { EventEmitter } from "events";
import { dispatcher } from "../dispatcher";

class ThemeStore extends EventEmitter {
  constructor() {
    super();
    /**
     * @param {Object} border - styles for all borders
     * @param {Object} divider- typically horizintal rules, or other elements that provide visual
     *  divisions.      *
     * @param {Object} name - For the display names of elements - like navigation elements.
     * @param {Object} text - Various styles for text - primary: typically content text;
     *  secondary: typically text that has diminished importance; title: typically headings;
     *  name: typically the display name for elements - like navigation items.
     * @param {string} background - The background colour
     * @param {string} primary - The primary colour.
     */
    // FIXME: create a better structure
    // FIXME: use variables for colour
    this.darkTheme = {
      primary: "#0044EE",
      secondary: "#222222",
      secondaryHover: "#333333",
      background: "#111111",
      text: {
        primary: {
          color: "#FFFFFF"
        },
        secondary: {
          color: "#999999"
        },
        secondaryHover: {
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: "1.01em"
        },
        title: {
          color: "#FFFFFF"
        },
        name: {
          color: "#FFFFFF"
        }
      },
      border: {
        border: "1px solid #AAAAAA"
      },
      divider: {
        border: "1px solid #222222"
      }
    };

    this.lightTheme = {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      background: "#FFFFFF",
      name: {
        color: "#000000"
      },
      text: {
        primary: {
          color: "#000000"
        },
        secondary: {
          color: "#555555"
        },
        title: {
          color: "#000000"
        },
        name: {
          color: "#000000"
        }
      },
      border: {
        border: "1px solid #DDDDDD"
      }
    };

    this.handleAction = this.handleAction.bind(this);
    this.getTheme = this.getTheme.bind(this);
    this._theme = this.darkTheme;

    this.setMaxListeners(0); // Lots of posts, and elements == lots of listeners
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
