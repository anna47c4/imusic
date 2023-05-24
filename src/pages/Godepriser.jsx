//components import
import Button from "../components/Button";
import FastLavPris from "../components/FastLavPris";
//react imports
import { useNavigate } from "react-router-dom";
function Godepriser() {
  //vi opsætter en vej til vinyl siden, og
  //kobler funktionen på vores knap
  const navigate = useNavigate();
  function goToVinyler() {
    navigate("../produkter/vinyler");
  }
  //herunder har vi vores return statement, som
  //giver os det indhold, vi viser i vores frontend
  return (
    <>
      <section className="gode-priser-hero">
        <div className="top-vid">{/*     <video></video> */}</div>
        <div className="hero-txt hero-btn">
          <h1>
            Spar penge på vinyler med en kampagnekode på 15% rabat til dit næste
            køb hos imusic
          </h1>
          <p>
            Brug kampagnekoden ‘IMUSIC15’ ved check-ud. Psssst, forresten vi er
            ikke færdige... Lige nu har vi en konkurrence på vores Instagram{" "}
            <em>imusicdk.</em> Klik ind og deltag du har mulighed for at vinde
            et gavekort på 1000 dkk, som kan bruges på hele imusic.dk.
          </p>
          <div className="cta-btn-wrapper">
            <Button
              className={"cta-btn"}
              clickAction={goToVinyler}
              desc={"DELTAG"}
            ></Button>
          </div>
        </div>
      </section>
      <main>
        <section className="tilbud">
          <div className="txt">
            <h2>Tilbud lige nu</h2>
            <p>
              Gør et kup - tilbuddene gælder i en begrænset periode. Så skynd
              dig!
            </p>
          </div>
          <div className="tilbud-wrapper">
            <div className="vinyl-tilbud">
              <h3>GODE TILBUD PÅ VINYLER LIGE NU!</h3>
              <Button className={"cat-btn"} desc={"TJEK TILBUD"}></Button>
            </div>
            <div className="kpop-tilbud">
              <h3>GODE TILBUD PÅ K-POP LIGE NU!</h3>
              <Button className={"cat-btn"} desc={"TJEK TILBUD"}></Button>
            </div>
          </div>
        </section>
        <section className="fast-lav-pris">
          <FastLavPris></FastLavPris>
        </section>
      </main>
    </>
  );
}

export default Godepriser;
