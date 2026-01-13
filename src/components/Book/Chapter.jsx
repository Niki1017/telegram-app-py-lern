import React, { useState } from "react";

function Chapter({ chapter }) {
  const [currentStep, setCurrentStep] = useState(0);

  const step = chapter.steps[currentStep];

  return (
    <div className="chapter-content">
      <h2>{chapter.title}</h2>
      <div className="step">
        <h3>{step.title}</h3>
        <p style={{ whiteSpace: "pre-line" }}>{step.content}</p>
      </div>

      <div className="navigation">
        <button
          onClick={() => setCurrentStep(s => Math.max(s - 1, 0))}
          disabled={currentStep === 0}
        >
          Назад
        </button>
        <button
          onClick={() =>
            setCurrentStep(s => Math.min(s + 1, chapter.steps.length - 1))
          }
          disabled={currentStep === chapter.steps.length - 1}
        >
          Вперед
        </button>
      </div>
    </div>
  );
}

export default Chapter;
