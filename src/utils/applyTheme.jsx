import { ThemeSettings } from "../../settings/theme.settings";
import { TelegramService } from "../services/telegram.service";

export function applyTheme() {
  const mode = ThemeSettings.get();
  const root = document.documentElement;

  // Базовые темы приложения
  const lightTheme = {
    "--bg": "#ffffff",
    "--text": "#111111",
    "--secondary-bg": "#f3f4f6",
    "--border": "#9a9a9a",
  };

  const darkTheme = {
    "--bg": "#17212B",
    "--text": "#e5e7eb",
    "--secondary-bg": "#1e293b",
    "--border": "#334155",
  };

  // 1. Принудительная светлая
  if (mode === "light") {
    applyVars(root, lightTheme);
    return;
  }

  // 2. Принудительная тёмная
  if (mode === "dark") {
    applyVars(root, darkTheme);
    return;
  }

  // 3. Системная (Telegram)
  if (mode === "telegram" && TelegramService.isTelegram()) {
    const tgTheme = TelegramService.tg.themeParams;

    root.style.setProperty("--bg", tgTheme.bg_color || "#ffffff");
    root.style.setProperty("--text", tgTheme.text_color || "#000000");
    root.style.setProperty(
      "--secondary-bg",
      tgTheme.secondary_bg_color || "#f3f4f6"
    );
    root.style.setProperty(
      "--border",
      tgTheme.hint_color || "#d1d5db"
    );
    return;
  }

  // fallback (если не Telegram)
  applyVars(root, lightTheme);
}

function applyVars(root, vars) {
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
