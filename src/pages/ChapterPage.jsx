import { useParams, Link } from "react-router-dom";
import { chapters } from "../data/chapters";

import "./ChapterPage.css";

function ChapterPage() {
  const { id } = useParams();

  const chapter = chapters.find(ch => String(ch.id) === id);

  if (!chapter) return <p>Глава не найдена</p>;

  return (
    <main className="chapter-page">
      <h1 className="chapter-title">
        {chapter.id}. {chapter.title}
      </h1>

      {chapter.subchapters.map(sub => (
        <section key={sub.id} className="subchapter">
          <h2 className="subchapter-title">
            {sub.id} {sub.title}
          </h2>

          <div className="subchapter-content">
            {renderContent(sub.content)}
          </div>
        </section>
      ))}

      <Link className="back-link" to="/pybook">
        ← Назад к содержанию
      </Link>
    </main>
  );
}

function renderContent(content) {
  const parts = content.split("```");

  return parts.map((part, index) => {
    // Код
    if (index % 2 === 1) {
      return (
        <pre key={index} className="code-block">
          <code>{part.replace(/^python\n/, "")}</code>
        </pre>
      );
    }

    // Обычный текст
    return part
      .trim()
      .split("\n")
      .map((line, i) =>
        line.trim() ? <p key={i}>{line}</p> : null
      );
  });
}

export default ChapterPage;
