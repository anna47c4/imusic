import Button from "./Button";
import { useNavigate } from "react-router-dom";
import butikBillede from "../assets/img/butik.webp";
function AppetizerOne() {
  const navigate = useNavigate();
  function goToVinyler() {
    navigate("../produkter/vinyler");
  }
  return (
    <>
      <div className="store-img">
        <img src={butikBillede} alt="Billede fra imusics butik i Risskov" />{" "}
      </div>
      <div className="store-txt-wrapper background1">
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
      </div>
    </>
  );
}

export default AppetizerOne;
