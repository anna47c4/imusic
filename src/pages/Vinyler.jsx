/* import React, { useContext, useState } from "react";
import { VinylDataContext } from "../components/VinylDataContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
function Vinyler() {
  const vinylData = useContext(VinylDataContext);

  console.log(vinylData); // Kontroller om vinylData er tilgængelig

  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }

  const [selectedGenre, setSelectedGenre] = useState("Alle");
  const [showOnlyNyheder, setShowOnlyNyheder] = useState(false);
  const [showOnlyFarvetVinyl, setShowOnlyFarvetVinyl] = useState(false);

  function handleGenreFilter(genre) {
    setSelectedGenre(genre);
  }

  function handleNyhederFilter() {
    setShowOnlyNyheder(!showOnlyNyheder);
  }

  const handleFarvetVinylFilter = () => {
    setShowOnlyFarvetVinyl(!showOnlyFarvetVinyl);
  };


  const filteredVinyls = vinylData.filter((vinyl) => {
    if (selectedGenre === "Alle" && !showOnlyNyheder && !showOnlyFarvetVinyl) {
      return true; // Vis alle vinyler uden filtrering
    }

    if (showOnlyNyheder && !vinyl.nyhed) {
      return false; // Skjul vinyler uden nyheder
    }

    if (showOnlyFarvetVinyl && vinyl.farve !== "Farvet vinyl") {
      return false; // Skjul vinyler uden farvet vinyl
    }

    if (selectedGenre !== "Alle" && vinyl.genre !== selectedGenre) {
      return false; // Skjul vinyler med forskellig genre
    }

    return true; // Vis vinyler, der opfylder filtreringsbetingelserne
  });

  return (
    <>
      <h1>Nye & kommende vinyludgivelser</h1>

      <div className="filter-wrapper">
        <Button
          className={selectedGenre === "Alle" ? "active" : ""}
          clickAction={() => handleGenreFilter("Alle")}
          desc="Alle"
        />
        <Button
          className={selectedGenre === "Rock" ? "active" : ""}
          clickAction={() => handleGenreFilter("Rock")}
          desc="Rock"
        />
        <Button
          className={selectedGenre === "Pop" ? "active" : ""}
          clickAction={() => handleGenreFilter("Pop")}
          desc="Pop"
        />

      </div>

      <div className="filter-wrapper">
        <Button
          className={showOnlyNyheder ? "active" : ""}
          clickAction={handleNyhederFilter}
          desc="Kun Nyheder"
        />
        <Button
          className={showOnlyFarvetVinyl ? "active" : ""}
          clickAction={handleFarvetVinylFilter}
          desc="Farvet Vinyl"
        />
      </div>
      <div className="vinyl-wrapper">
        {filteredVinyls.map((vinyl) => (
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
                <div className="lav-agerstatus">
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
                    {vinyl.no_tag && <p className="notag-p">{vinyl.no_tag}</p>}
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
        ))}
      </div>
    </>
  );
}

export default Vinyler;
 */

import { useContext, useEffect, useState } from "react";
import { VinylDataContext } from "../components/VinylDataContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Vinyler() {
  const vinylData = useContext(VinylDataContext);
  const [filteredVinyls, setFilteredVinyls] = useState([]);

  const navigate = useNavigate();

  const [selectedGenre, setSelectedGenre] = useState("Alle");
  const [showOnlyNyheder, setShowOnlyNyheder] = useState(false);
  const [showOnlyFarvetVinyl, setShowOnlyFarvetVinyl] = useState(false);
  /*   const [isFiltering, setIsFiltering] = useState(false); */

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
  }, [vinylData, selectedGenre, showOnlyNyheder, showOnlyFarvetVinyl]);

  function filterVinyls(vinyls, genre, nyheder, farvetVinyl) {
    return vinyls.filter((vinyl) => {
      if (genre === "Alle" && !nyheder && !farvetVinyl) return true;
      if (nyheder && !vinyl.nyhed) return false;
      if (farvetVinyl && vinyl.farve !== "Farvet vinyl") return false;
      if (genre !== "Alle" && vinyl.genre !== genre) return false;
      return true;
    });
  }

  function goToHome() {
    navigate("/");
  }

  function handleGenreFilter(genre) {
    setSelectedGenre(genre);
    setFilteredVinyls(
      filterVinyls(vinylData, genre, showOnlyNyheder, showOnlyFarvetVinyl)
    );
  }

  function handleNyhederFilter() {
    setShowOnlyNyheder((prevShowOnlyNyheder) => !prevShowOnlyNyheder);
  }

  function handleFarvetVinylFilter() {
    setShowOnlyFarvetVinyl(
      (prevShowOnlyFarvetVinyl) => !prevShowOnlyFarvetVinyl
    );
  }

  return (
    <>
      <main>
        <h1>Nye & kommende vinyludgivelser</h1>

        <div className="filter-wrapper">
          <Button
            className={selectedGenre === "Alle" ? "active" : ""}
            clickAction={() => handleGenreFilter("Alle")}
            desc="Alle"
          />
          <Button
            className={selectedGenre === "Rock" ? "active" : ""}
            clickAction={() => handleGenreFilter("Rock")}
            desc="Rock"
          />
          <Button
            className={selectedGenre === "Pop" ? "active" : ""}
            clickAction={() => handleGenreFilter("Pop")}
            desc="Pop"
          />
        </div>

        <div className="filter-wrapper">
          <Button
            className={showOnlyNyheder ? "active" : ""}
            clickAction={handleNyhederFilter}
            desc="Kun Nyheder"
          />
          <Button
            className={showOnlyFarvetVinyl ? "active" : ""}
            clickAction={handleFarvetVinylFilter}
            desc="Farvet Vinyl"
          />
        </div>
        <div className="vinyl-wrapper">
          {filteredVinyls.map((vinyl) => (
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
                  <div className="lav-agerstatus">
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
          ))}
        </div>
      </main>
    </>
  );
}

export default Vinyler;
