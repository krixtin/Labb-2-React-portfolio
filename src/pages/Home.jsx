import { useEffect } from "react";
import profilePic from "../assets/images/profilbild.png";

function Home() {
    useEffect(() => {
        document.title = "Kris Ahnlund | Hem";
    }, []);
  
  return (
    <main id="index-main">
      <section id="short-about-me">
        <h3>Kris Ahnlund</h3>
        <p>Jag heter Kris och studerar fullstack&nbsp;.NET på yrkeshögskolan Chas&nbsp;Academy i Stockholm. Jag är även översättare och tar uppdrag i min enskilda firma, KEA&nbsp;text.</p>
        <img id="profile-pic" src={profilePic} alt="Profilbild" width="300" />
      </section>
      <section id="welcome-section">
        <h1>Välkommen till min portfolio!</h1>
        <p>Den här webbplatsen är skapad som en del av min utbildning på Chas&nbsp;Academy, där jag studerar till fullstackutvecklare med inriktning på .NET. Välkommen att kika runt!</p>
      </section>
    </main>
  );
}

export default Home;