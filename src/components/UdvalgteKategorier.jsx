import bog from "../assets/svg/bog.svg";
import film from "../assets/svg/film.svg";
import cd from "../assets/svg/cd.svg";
import vinyl from "../assets/svg/vinyl.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
function UdvalgteKategorier() {
  const navigate = useNavigate();
  function goToVinyler() {
    navigate("./produkter/vinyler");
  }
  function goToCd() {
    navigate("./produkter/cd");
  }
  function goToFilm() {
    navigate("./produkter/film");
  }
  function goToBog() {
    navigate("./produkter/boger");
  }
  return (
    <>
      <div className="heading">
        <h2>Se udvalgte kategorier</h2>
        <p>Nordens største udvalg af musik, film og bøger</p>
      </div>
      <div className="cat-wrapper">
        <div className="vinyl-cat cat">
          <div className="img-wrapper">
            <img
              src={vinyl}
              alt="Vinyl ikon der symboliserer fast lav pris på vinyler"
            />
          </div>

          <div className="btn-wrapper">
            <Button
              className={"cat-btn"}
              clickAction={goToVinyler}
              desc={"VINYLER"}
            ></Button>
          </div>
        </div>
        <div className="cd-cat cat">
          <div className="img-wrapper">
            <img
              src={cd}
              alt="CD ikon der symboliserer fast lav pris på CD'er"
            />
          </div>

          <div className="btn-wrapper">
            <Button
              className={"cat-btn"}
              clickAction={goToCd}
              desc={"CD'ER"}
            ></Button>
          </div>
        </div>
        <div className="film-cat cat">
          <div className="img-wrapper">
            <img
              src={film}
              alt="Film ikon der symboliserer fast lav pris på Film"
              className="film"
            />
          </div>

          <div className="btn-wrapper">
            <Button
              className={"cat-btn"}
              clickAction={goToFilm}
              desc={"FILM"}
            ></Button>
          </div>
        </div>
        <div className="bog-cat cat">
          <div className="img-wrapper">
            <img
              src={bog}
              alt="Bog ikon der symboliserer fast lav pris på Bøger"
              className="bog"
            />
          </div>

          <div className="btn-wrapper">
            <Button
              className={"cat-btn"}
              clickAction={goToBog}
              desc={"BØGER"}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UdvalgteKategorier;
