import { useState, useEffect } from "react";
import gårdslanken from "../assets/images/gårdslänken.png";

const manualProjects = [
  {
    id: 1,
    title: "Gårdslänken",
    image: gårdslanken,
    imageAlt: "skärmbild från Gårdslänken",
    description: (
      <>
        Inom ramen för Chas Challenge, ett programöverskridande skolprojekt på Chas Academy, byggde jag och mina teamkamrater en plattform för REKO-ringar för att underlätta direkt handel mellan lokala producenter och kunder.{" "}
        <a href="https://chasacademy.se/job/team-11-gardslanken/" target="_blank" rel="noopener noreferrer">Läs mer här.</a>
      </>
    ),
  },
];

function Portfolio() {
  const [openModal, setOpenModal] = useState(null);
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/krixtin/repos")
      .then((res) => res.json())
      .then((data) => {
        setGithubProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

useEffect(() => {
    document.title = "Kris Ahnlund | Portfolio";
  }, []);

  return (
    <main id="portfolio-main">
      <h1 id="portfolio-title">Portfolio</h1>

      <section id="portfolio-projects">
        <ul>
          {manualProjects.map((project) => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <img src={project.image} alt={project.imageAlt} width="200" />
              <br />
              <button className="project-btn" type="button" onClick={() => setOpenModal(project.id)}>
                Läs mer
              </button>
              {openModal === project.id && (
                <div className="project-modal modal-overlay show" onClick={(e) => {
                  if (e.target.classList.contains("modal-overlay") || e.target.classList.contains("modal-close")) {
                    setOpenModal(null);
                  }
                }}>
                  <div className="modal-box">
                    <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
                    <p>{project.description}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id="github-projects">
        <h2>Projekt på GitHub</h2>
        {loading ? (
          <p>Laddar projekt...</p>
        ) : (
          <ul>
            {githubProjects
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .map((repo) => (
              <li key={repo.id}>
                <h3><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
                {repo.description && <p>{repo.description}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Portfolio;