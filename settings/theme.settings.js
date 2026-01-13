const THEME_KEY = "app_theme";

/**
 * Возможные значения:
 * - telegram (по умолчанию)
 * - light
 * - dark
 */
class ThemeSettings {
  static get() {
    return localStorage.getItem(THEME_KEY) || "telegram";
  }

  static set(value) {
    if (!["telegram", "light", "dark"].includes(value)) {
      console.warn("Unknown theme value:", value);
      return;
    }
    localStorage.setItem(THEME_KEY, value);
  }

  static clear() {
    localStorage.removeItem(THEME_KEY);
  }
}

export { ThemeSettings };
