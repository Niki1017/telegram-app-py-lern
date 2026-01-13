import { useState } from "react";
import avatar from "../../assets/images/avatar.jfif";
import "./Header.css";
import { TelegramService } from "../../services/telegram.service";

import { Link } from "react-router-dom";

function Header() {
  const user = TelegramService.getUser();
  const isTelegram = TelegramService.isTelegram();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="infoUser">
          <img src={avatar} alt="avatar" />
          <p>
            {isTelegram ? user?.first_name || "Гость" : "Гость (браузер)"}
          </p>
        </div>

        {/* Бургер */}
        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Выпадающее меню */}
      <nav className={`burger-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>📘 Учебник</Link>
          </li>
          <li onClick={closeMenu}>🧠 Тренажёр</li>
          <li>
            <Link to="/settings" onClick={closeMenu}>⚙️ Настройки</Link>
          </li>
          {/* <li onClick={closeMenu}>ℹ️ О проекте</li> */}
          <li>
            <Link to="/about-project" onClick={closeMenu}>ℹ️ О проекте</Link>
          </li>
        </ul>
      </nav>

      {/* Затемнение фона */}
      {menuOpen && <div className="overlay" onClick={closeMenu} />}
    </header>
  );
}

export default Header;
