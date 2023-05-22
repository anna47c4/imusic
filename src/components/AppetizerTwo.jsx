import Button from "./Button";
import { useNavigate } from "react-router-dom";
function AppetizerTwo() {
  const navigate = useNavigate();
  function goToVinyler() {
    navigate("../produkter/vinyler");
  }
  return (
    <>
      <div className="store-img">{/*           <img src="" alt="" /> */}</div>
      <div className="store-txt">
        <h3>Drømmer du om at samle på vinyler, men mangler en pladespiller?</h3>
        <p>
          Her finder du et bredt udvalg af pladespillere der sørger for, at du
          kan få den autentiske lyd fra vinylen ind i din stue.
        </p>
        <div className="store-btn">
          <Button
            className={"cta-btn"}
            desc={"AUDIO & HIFI"}
            clickAction={goToVinyler}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default AppetizerTwo;
