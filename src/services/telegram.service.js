class TelegramService {
  static tg = window.Telegram?.WebApp;

  static init() {
    if (!this.tg) return;

    this.tg.ready();

    const theme = this.tg.themeParams || {};

    document.documentElement.style.setProperty(
      "--by-theme-bg-color",
      theme.bg_color || "#ffffff"
    );

    document.documentElement.style.setProperty(
      "--by-theme-text-color",
      theme.text_color || "#000000"
    );

    document.documentElement.style.setProperty(
      "--by-theme-secondary-bg-color",
      theme.secondary_bg_color || "#f5f5f5"
    );

    document.documentElement.style.setProperty(
      "--by-theme-button-color",
      theme.button_color || "#0088cc"
    );

    document.documentElement.style.setProperty(
      "--by-theme-button-text-color",
      theme.button_text_color || "#ffffff"
    );
  }

  static getUser() {
    return this.tg?.initDataUnsafe?.user;
  }

  static isTelegram() {
    return Boolean(this.tg);
  }
}

export { TelegramService };
