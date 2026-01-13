import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import PyBook from "./pages/pyBook";
import ChapterPage from "./pages/ChapterPage";
import Settings from "./pages/Settings";
import About from "./pages/About";

import { TelegramService } from "./services/telegram.service";
import { applyTheme } from "./utils/applyTheme";

function App() {
  useEffect(() => {
    // Инициализация Telegram WebApp (если открыто в Telegram)
    TelegramService.init();

    // Применение сохранённой темы (light / dark / telegram)
    applyTheme();
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<PyBook />} />
        <Route path="/pybook" element={<PyBook />} />
        <Route path="/chapter/:id" element={<ChapterPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about-project" element={<About />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
