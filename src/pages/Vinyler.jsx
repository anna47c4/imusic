//React imports
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//Vinyldata
import { VinylDataContext } from "../components/VinylDataContext";
//Components
import Button from "../components/Button";
//Styles
import "../styles/vinyler.scss";

function Vinyler() {
  //useEffect der sørger for at sende vinduet til tops når siden renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //opbevaring af vores vinyldata i en const
  const vinylData = useContext(VinylDataContext);
  //useState opsat til at styre filtreringen, starter med et tomt array
  const [filteredVinyls, setFilteredVinyls] = useState([]);
  //her opsætter vi useNavigate i en navigate const, som vi kan bruge til at navigere brugeren et sted hen
  const navigate = useNavigate();
  //Filtrerings states
  const [selectedGenre, setSelectedGenre] = useState("Alle"); //genren starter med at være alle, så alle vinyler vises
  const [showOnlyNyheder, setShowOnlyNyheder] = useState(false); //vis kun nyheder, starter med at være falsk
  const [showOnlyFarvetVinyl, setShowOnlyFarvetVinyl] = useState(false); //vis kun farvede vinyler starter med at være falsk
  /*   const [isFiltering, setIsFiltering] = useState(false); */ //state der skal undersøge, hvorvidt der foregår en filtrering eller ej

  //i denne useEffect tjekker vi at vi rent faktisk har dataen før,
  //vi begynder at filtrere på det
  useEffect(() => {
    if (vinylData && vinylData.length > 0) {
      const filteredVinyls = filterVinyls(
        vinylData,
        selectedGenre,
        showOnlyNyheder,
        showOnlyFarvetVinyl
      );
      setFilteredVinyls(filteredVinyls);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vinylData, selectedGenre, showOnlyNyheder, showOnlyFarvetVinyl]);

  //i denne funktion har vi vores forskellige conditions der tjekker om
  //vinylerne passer med filtreringskravet
  function filterVinyls(vinyls, genre /* nyheder, farvetVinyl */) {
    let all = [...vinyls];
    if (genre !== "Alle") {
      all = all.filter((vinyl) => vinyl.genre === genre);
    }
    if (showOnlyNyheder) {
      all = all.filter((vinyl) => vinyl.nyhed);
    }
    if (showOnlyFarvetVinyl) {
      all = all.filter((vinyl) => vinyl.farve === "Farvet vinyl");
    }
    /* return vinyls.filter((vinyl) => {
      if (genre === "Alle" && !nyheder && !farvetVinyl) return true;
      if (nyheder && !vinyl.nyhed) return false;
      if (farvetVinyl && vinyl.farve !== "Farvet vinyl") return false;
      if (genre !== "Alle" && vinyl.genre !== genre) return false;
      return true;
    }); */
    return all;
  }
  //her har vi en funktion der sender brugeren til forsiden
  function goToHome() {
    navigate("/");
  }
  //her har vi den funktion der sætter genren til det valgte,
  //og som filtrerer / sætter vinylerne efter den genre
  function handleGenreFilter(genre) {
    setSelectedGenre(genre);
    setFilteredVinyls(
      filterVinyls(vinylData, genre, showOnlyNyheder, showOnlyFarvetVinyl)
    );
  }
  //her toggler vi statet mellem true og false i forhold til
  //om der kun skal vises nyheder
  function handleNyhederFilter() {
    setShowOnlyNyheder((prevShowOnlyNyheder) => !prevShowOnlyNyheder);
  }
  //her toggler vi statet mellem true og false i forhold til
  //om der kun skal vises farvede vinyler
  function handleFarvetVinylFilter() {
    setShowOnlyFarvetVinyl(
      (prevShowOnlyFarvetVinyl) => !prevShowOnlyFarvetVinyl
    );
  }
  //her har vi vores return statement, hvor vi får det korrekte
  //indhold vist i vores frontend
  return (
    <>
      <main>
        <h1>Nye & kommende vinyludgivelser</h1>
        <div className="filter-btn-wrapper">
          <div className="filter-wrapper-genre">
            <Button
              className={selectedGenre === "Alle" ? "active" : ""}
              clickAction={() => {
                handleGenreFilter("Alle");

                setShowOnlyNyheder(false);
                setShowOnlyFarvetVinyl(false);
              }}
              desc="ALLE"
            />
            <Button
              className={selectedGenre === "Rock" ? "active" : ""}
              clickAction={() => handleGenreFilter("Rock")}
              desc="ROCK"
            />
            <Button
              className={selectedGenre === "Pop" ? "active" : ""}
              clickAction={() => handleGenreFilter("Pop")}
              desc="POP"
            />

            <Button
              className={selectedGenre === "Metal" ? "active" : ""}
              clickAction={() => handleGenreFilter("Metal")}
              desc="METAL"
            />

            <Button
              className={selectedGenre === "Country" ? "active" : ""}
              clickAction={() => handleGenreFilter("Country")}
              desc="COUNTRY"
            />

            <Button
              className={selectedGenre === "Soundtrack" ? "active" : ""}
              clickAction={() => handleGenreFilter("Soundtrack")}
              desc="SOUNDTRACK"
            />

            <Button
              className={selectedGenre === "Skandinavisk" ? "active" : ""}
              clickAction={() => handleGenreFilter("Skandinavisk")}
              desc="SKANDINAVISK"
            />

            <div className="filter-wrapper-other"></div>
            <Button
              className={showOnlyNyheder ? "active" : ""}
              clickAction={handleNyhederFilter}
              desc="NYHEDER"
            />
            <Button
              className={showOnlyFarvetVinyl ? "active" : ""}
              clickAction={handleFarvetVinylFilter}
              desc="FARVET VINYL"
            />
          </div>
        </div>

        <div className="vinyl-wrapper">
          {filteredVinyls.length === 0 ? (
            <p>Der er ingen plader der matcher dine filtre</p>
          ) : null}
          {filteredVinyls.map((vinyl) => (
            <Link
              to={`/produkter/vinyler/${vinyl.id}`}
              key={vinyl.id}
              className="vinyl"
            >
              <div key={vinyl.id} className="vinyl">
                <div className="img-wrapper">
                  <img
                    src={vinyl.imgUrl}
                    className="produkt-img"
                    alt="produkt billede af vinyl"
                  ></img>
                </div>

                <div className="tags">
                  <div className="tag-wrapper">
                    <div className="edition">
                      {vinyl.edition && (
                        <p className="edition-p">{vinyl.edition}</p>
                      )}
                    </div>
                    <div className="nyhed">
                      {vinyl.nyhed && <p className="nyhed-p">{vinyl.nyhed}</p>}
                    </div>
                    <div className="lagerstatus">
                      {vinyl.lagerstatus && (
                        <p className="lagerstatus-p">{vinyl.lagerstatus}</p>
                      )}
                    </div>
                    <div className="lav-lagerstatus">
                      {vinyl.lav_lager && (
                        <p className="lav-lagerstatus-p">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_196_2460)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0ZM4 0.421054C2.0234 0.421054 0.421054 2.0234 0.421054 4C0.421054 5.9766 2.0234 7.57895 4 7.57895C5.9766 7.57895 7.57895 5.9766 7.57895 4C7.57895 2.0234 5.9766 0.421054 4 0.421054ZM3.96117 5.5106C3.62773 5.5106 3.35647 5.78187 3.35647 6.1153C3.35647 6.44873 3.62773 6.72 3.96117 6.72C4.2946 6.72 4.56587 6.44873 4.56587 6.1153C4.56587 5.78187 4.2946 5.5106 3.96117 5.5106ZM4.76444 1.47368H3.1579L3.54915 5.02088H4.37318L4.76444 1.47368Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_196_2460">
                                <rect width="8" height="8" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>{" "}
                          {vinyl.lav_lager}
                        </p>
                      )}
                      <div className="notag">
                        {vinyl.no_tag && (
                          <p className="notag-p">{vinyl.no_tag}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="kunstner">{vinyl.kunstner} -</p>
                <p className="titel">{vinyl.titel}</p>
                <div className="pris-wrapper">
                  <p className="pris">DKK {vinyl.pris},- </p>
                </div>

                <div className="btn-wrapper">
                  <Button
                    className={"buybtn buy-btn"}
                    desc={vinyl.btn_txt}
                    clickAction={goToHome}
                  ></Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Vinyler;
