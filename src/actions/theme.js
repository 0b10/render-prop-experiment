import { dispatcher } from "../dispatcher";

export function setTheme(theme) {
  dispatcher.dispatch({
    type: "CHANGE_THEME",
    theme
  });
}
