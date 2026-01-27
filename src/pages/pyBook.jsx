import { useState } from "react";
import { chapters } from "../data/chapters";
import { Link } from "react-router-dom";

import "./pyBook.css";

const PyBook = () => {
  const [search, setSearch] = useState("");

  const filteredChapters = chapters
    .map(ch => {
      const searchLower = search.toLowerCase();

      const chapterMatches =
        String(ch.id).includes(searchLower) ||
        ch.title.toLowerCase().includes(searchLower);

      const filteredSub = (ch.subchapters || []).filter(sub =>
        sub.id.includes(searchLower) ||
        sub.title.toLowerCase().includes(searchLower)
      );

      if (chapterMatches || filteredSub.length > 0) {
        return { ...ch, subchapters: filteredSub };
      }

      return null;
    })
    .filter(Boolean);

  return (
    <main className="pybook">
      <div className="pybook-header">
        <h1>Содержание</h1>
        <input
          type="search"
          placeholder="Поиск по главам..."
          className="chapter-search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <ul className="chapter-list">
        {filteredChapters.length > 0 ? (
          filteredChapters.map(ch => (
            <li key={ch.id} className="chapter-item">
              {/* Ссылка на главу */}
              <Link
                to={`/chapter/${ch.id}`}
                className="chapter-link"
              >
                {ch.id}. {ch.title}
              </Link>

              {/* Подглавы */}
              {ch.subchapters?.length > 0 && (
                <ul className="subchapter-list">
                  {ch.subchapters.map(sub => (
                    <li key={sub.id} className="subchapter-item">
                      <Link
                        to={`/chapter/${ch.id}#${sub.id}`}
                        className="subchapter-link"
                      >
                        {sub.id} {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        ) : (
          <li className="chapter-item">Глава не найдена</li>
        )}
      </ul>
    </main>
  );
}

export default PyBook;
