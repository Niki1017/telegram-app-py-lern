import { ThemeSettings } from "../../settings/theme.settings.js";
import { applyTheme } from "../utils/applyTheme.jsx";
import { useState } from "react";

import "./Settings.css";

const Settings = () => {
  const [theme, setTheme] = useState(ThemeSettings.get());

  const changeTheme = (value) => {
    setTheme(value);
    ThemeSettings.set(value);
    applyTheme();
  };

  return (
    <main className="settings">
      <h1>Настройки</h1>

      <section className="settings-block">
        <h2>Тема оформления</h2>

        <label className="radio">
          <input
            type="radio"
            name="theme"
            checked={theme === "telegram"}
            onChange={() => changeTheme("telegram")}
          />
          <span>Системная (Telegram)</span>
        </label>

        <label className="radio">
          <input
            type="radio"
            name="theme"
            checked={theme === "light"}
            onChange={() => changeTheme("light")}
          />
          <span>Светлая</span>
        </label>

        <label className="radio">
          <input
            type="radio"
            name="theme"
            checked={theme === "dark"}
            onChange={() => changeTheme("dark")}
          />
          <span>Тёмная</span>
        </label>
      </section>
    </main>
  );
}

export default Settings;
