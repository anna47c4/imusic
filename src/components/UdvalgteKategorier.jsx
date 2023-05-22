import bogFastPris from "../assets/svg/lilleBogFastPris.svg";
import filmFastPris from "../assets/svg/lilleFilmFastPris.svg";
import cdFastPris from "../assets/svg/lilleCdFastPris.svg";
import vinylFastPris from "../assets/svg/lilleVinylFastPris.svg";
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
      <div className="vinyl-cat">
        <img
          src={vinylFastPris}
          alt="Vinyl ikon der symboliserer fast lav pris på vinyler"
        />
        <Button
          className={"cat-btn"}
          clickAction={goToVinyler}
          desc={"VINYLER"}
        ></Button>
      </div>
      <div className="cd-cat">
        <img
          src={cdFastPris}
          alt="CD ikon der symboliserer fast lav pris på CD'er"
        />
        <Button
          className={"cat-btn"}
          clickAction={goToCd}
          desc={"CD'ER"}
        ></Button>
      </div>
      <div className="film-cat">
        <img
          src={filmFastPris}
          alt="Film ikon der symboliserer fast lav pris på Film"
        />
        <Button
          className={"cat-btn"}
          clickAction={goToFilm}
          desc={"FILM"}
        ></Button>
      </div>
      <div className="bog-cat">
        <img
          src={bogFastPris}
          alt="Bog ikon der symboliserer fast lav pris på Bøger"
        />
        <Button
          className={"cat-btn"}
          clickAction={goToBog}
          desc={"BØGER"}
        ></Button>
      </div>
    </>
  );
}

export default UdvalgteKategorier;
