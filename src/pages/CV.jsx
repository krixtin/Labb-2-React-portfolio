import { useEffect } from "react";
import cvData from "../data/cv.json";

function CV() {
  useEffect(() => {
    document.title = "Kris Ahnlund | CV";
  }, []);

  return (
    <main id="cv-main">
      <h1 id="cv-title">{cvData.cv.title}</h1>
      {cvData.cv.sections.map((section) => (
        <section key={section.title} className="cv-section">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <h4>{item.period_institution}</h4>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default CV;