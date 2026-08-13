import { useEffect } from "react";
function About() {
  useEffect(() => {
    document.title = "Kris Ahnlund | Om Mig";
  }, []);

  return (
    <main id="about-main">
      <div className="who-is">
        <h2>Vem är Kris?</h2>
        <p>Kris är en perfektionistisk språknörd med intresse för både det ena och det andra, som det senaste året har breddat sin språkkompetens med programmeringsspråk.</p>
      </div>
      <div className="about-2">
        <h2>Bakgrund</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus unde ut eum repellendus id, aspernatur numquam! Ipsam possimus iste sit.</p>
      </div>
      <div className="about-3">
        <h2>Intressen</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consequatur animi. Quae, totam doloribus. Quisquam repellat hic officiis est sit!</p>
      </div>
    </main>
  );
}

export default About;