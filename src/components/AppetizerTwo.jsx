//components import
import Button from "./Button";
//react import
import { useNavigate } from "react-router-dom";
//asset import
import pladeSpiller from "../assets/img/pladespiller.webp";
function AppetizerTwo() {
  //navigate function, vi kobler på vores cta btn
  const navigate = useNavigate();
  function goToAudio() {
    navigate("../errorpage");
  }
  return (
    <>
      <div className="store-img">
        <img
          src={pladeSpiller}
          alt="Billede af en pladespiller, orange farver"
        />
      </div>
      <div className="store-txt-wrapper background2">
        <div className="store-txt">
          <h3>
            Drømmer du om at samle på vinyler, men mangler en pladespiller?
          </h3>
          <p>
            Her finder du et bredt udvalg af pladespillere der sørger for, at du
            kan få den autentiske lyd fra vinylen ind i din stue.
          </p>
          <div className="store-btn">
            <Button
              className={"cta-btn"}
              desc={"AUDIO & HIFI"}
              clickAction={goToAudio}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppetizerTwo;
