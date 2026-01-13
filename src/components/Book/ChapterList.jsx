import React from "react";

function ChapterList({ chapters, onSelect }) {
  return (
    <aside className="chapter-list">
      <h2>Содержание</h2>
      <ul>
        {chapters.map(ch => (
          <li key={ch.id}>
            <button onClick={() => onSelect(ch.id)}>
              {ch.id}. {ch.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ChapterList;
