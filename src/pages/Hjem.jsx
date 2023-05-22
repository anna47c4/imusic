import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import UdvalgteKategorier from "../components/UdvalgteKategorier";
function Hjem() {
  const navigate = useNavigate();
  function goToVinyler() {
    navigate("../produkter/vinyler");
  }

  return (
    <>
      <section className="hero-section">
        <div className="top-img">{/*           <img src={} alt="" /> */}</div>
        <div className="hero-txt hero-btn">
          <h1>
            Vil du have fingrene i en 15% kampagnekode til vinyler hos imusic?
            så se mere her
          </h1>
          <p>
            Klik dig videre til vores kampagne og få fat i din kode, som du kan
            bruge på imusics vinyler! Skynd dig at benytte tilbuddet, og få din
            rabat før det er for sent.
          </p>
          <div className="cta-btn-wrapper">
            <Button
              className={"cta-btn"}
              clickAction={goToVinyler}
              desc={"VINYLER"}
            ></Button>
          </div>
        </div>
      </section>
      <section className="udvalgte-kategorier">
        <UdvalgteKategorier></UdvalgteKategorier>
      </section>
      <section className="appetizer">
        <div className="store-img">{/*           <img src="" alt="" /> */}</div>
        <div className="store-txt">
          <h3>
            Med over 300.000 vinyler i vores udvalg har vi helt sikkert noget,
            der vil begejstre din musiksmag
          </h3>
          <p>
            Se vores brede udvalg af vinyler. Vi har alt hvad hjertet begærer
            til din samling.
          </p>
          <div className="store-btn">
            <Button
              className={"cta-btn"}
              desc={"VINYLER"}
              clickAction={goToVinyler}
            ></Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hjem;
