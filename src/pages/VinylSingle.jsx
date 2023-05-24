import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { VinylDataContext } from "../components/VinylDataContext";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Collapsible from "../components/Collapsible";
function VinylSingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [visLæsMere, setVisLæsMere] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 762);
    };

    // Lyt efter resize-begivenheden og opdater skærmstørrelsen
    window.addEventListener("resize", checkScreenSize);

    // Kald checkScreenSize når det er relevant
    checkScreenSize();

    // Oprydning når det er sket
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const vinylData = useContext(VinylDataContext);
  const limitedProducts = vinylData.slice(7, 12); // Opret en ny array med kun de første 4 produkter
  console.log("ID:", id);
  console.log("vinylData:", vinylData);

  const toggleLæsMere = () => {
    setVisLæsMere(!visLæsMere);
  };
  // Find det specifikke vinylprodukt baseret på id'et
  /*   const selectedVinyl = vinylData.find((vinyl) => vinyl.id === id); */
  const selectedVinyl = vinylData.find((vinyl) => vinyl.id === parseInt(id));
  // Håndter tilfælde hvor det specifikke vinylprodukt ikke findes
  if (!selectedVinyl) {
    return <div>Vinylproduktet blev ikke fundet.</div>;
  }

  return (
    <>
      <main>
        {isDesktop ? (
          /* Desktop-visning */
          <div className="vinyl-details">
            <section className="single-view-section">
              <div className="left-side-wrapper">
                <div className="single-vinyl-img">
                  <img
                    src={selectedVinyl.imgUrl}
                    alt="Produktbillede af den valgte vinyl"
                    className="produktbillede"
                  />
                  <figcaption>
                    Ved uoverensstemmelse mellem cover og titel gælder titel
                  </figcaption>
                </div>
                <aside className="share-content">
                  <p>Del varen med dine venner:</p>
                  <div className="some-svg">
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 20.0501C40 8.98246 31.04 0 20 0C8.96 0 0 8.98246 0 20.0501C0 29.7544 6.88 37.8346 16 39.6992V26.0652H12V20.0501H16V15.0376C16 11.1679 19.14 8.02005 23 8.02005H28V14.0351H24C22.9 14.0351 22 14.9373 22 16.0401V20.0501H28V26.0652H22V40C32.1 38.9975 40 30.4561 40 20.0501Z"
                        fill="#4F4F4F"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 46 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M41.2623 9.33033C41.2623 9.72231 41.2623 10.1374 41.2623 10.5293C41.284 14.0115 40.6058 17.4632 39.2671 20.6844C37.9282 23.9055 35.9556 26.832 33.4633 29.2943C30.971 31.7567 28.0089 33.7055 24.7485 35.0283C21.4881 36.3509 17.9943 37.021 14.4698 36.9995C9.34035 37.0143 4.31576 35.5651 0 32.8261C0.770167 32.8261 1.49366 32.8261 2.33384 32.8261C6.56616 32.8261 10.6758 31.4214 14.003 28.8371C12.0308 28.8196 10.1148 28.1855 8.52995 27.0257C6.94509 25.8659 5.77275 24.2399 5.18112 22.3809C5.77544 22.4746 6.37638 22.5209 6.97818 22.5193C7.81171 22.5133 8.64179 22.4128 9.45205 22.2195C7.34345 21.7944 5.44832 20.6625 4.08739 19.0152C2.72646 17.3682 1.98334 15.3071 1.98376 13.181C3.28859 13.8921 4.74253 14.2946 6.23135 14.3569C4.91768 13.4984 3.84136 12.3299 3.09971 10.957C2.35809 9.5842 1.97454 8.05036 1.98376 6.49424C1.98668 4.87439 2.42136 3.28388 3.24404 1.88271C5.60525 4.7595 8.55175 7.11422 11.8927 8.79438C15.2336 10.4745 18.8946 11.4427 22.6383 11.6361C22.4901 10.9383 22.4119 10.2278 22.4049 9.5148C22.344 7.61687 22.8777 5.74664 23.9328 4.15954C24.9882 2.57241 26.5134 1.34576 28.3006 0.647049C30.0876 -0.0516446 32.0497 -0.18833 33.9184 0.255669C35.7871 0.699667 37.4714 1.70272 38.7418 3.12782C40.8539 2.70866 42.8759 1.92836 44.7164 0.822056C44.0134 2.97371 42.5352 4.79533 40.5622 5.94086C42.4379 5.7406 44.2716 5.25851 46 4.51128C44.7201 6.35811 43.1436 7.98591 41.3323 9.33033H41.2623Z"
                        fill="#4F4F4F"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 46 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 34V0H46V33.9959H0V34ZM6.29573 30.2484H39.7043L29.0176 19.6757L23 25.6369L16.9845 19.6778L6.29573 30.2484ZM3.75318 27.613L14.3687 17.092L3.75318 6.62265V27.613ZM31.6292 17.092L42.2489 27.613V6.62058L31.6292 17.092ZM23.0021 20.3744L39.7754 3.7826L6.22673 3.78053L23.0021 20.3744Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </div>
                </aside>
              </div>

              <div className="right-side-wrapper">
                <div className="info-txt-shown">
                  <h1>{selectedVinyl.titel}</h1>
                  <div className="wrapper">
                    <h2>{selectedVinyl.kunstner}</h2>
                    {selectedVinyl.farve && <p>{selectedVinyl.farve}</p>}
                  </div>
                  {selectedVinyl.edition && (
                    <div className="edition-tag">
                      <p>{selectedVinyl.edition}</p>
                    </div>
                  )}

                  <div className="pris">
                    <p className="pr-stk">PRIS PR STK</p>
                    <p className="vinyl-pris">DKK {selectedVinyl.pris}</p>
                    {/*           <p className="lager-tag"></p> */}
                  </div>
                  {/*  <p>{selectedVinyl.desc_lang}</p> */}
                  <div className="read-more">
                    <p>
                      {visLæsMere
                        ? selectedVinyl.desc_lang // Vis den fulde tekst
                        : `${selectedVinyl.desc_lang.slice(0, 100)}...`}{" "}
                      {/* Vis kun en del af teksten */}
                    </p>
                    {selectedVinyl.desc_lang.length > 100 && (
                      <a onClick={toggleLæsMere}>
                        {visLæsMere ? "LÆS MINDRE" : "LÆS MERE"}
                      </a>
                    )}
                  </div>

                  <Button className={"cta-btn"} desc={"LÆG I KURV"}></Button>
                  <Collapsible label="Produktdetaljer">
                    <p>Medie: {selectedVinyl.medie}</p>
                    <hr></hr>
                    <p>Udgivet: {selectedVinyl.udgivet}</p>
                    <hr></hr>
                    <p>EAN / UPC: {selectedVinyl.ean_upc}</p>
                    <hr></hr>
                    <p>Udgiver: {selectedVinyl.udgiver}</p>
                    <hr></hr>
                    <p>Genre: {selectedVinyl.genre}</p>
                  </Collapsible>
                  <Collapsible label="Trackliste">
                    <p>{selectedVinyl.trackliste}</p>
                  </Collapsible>
                  <Collapsible label="Leveringsoplysninger">
                    <p>
                      <em>Hvornår leveres min bestilling?</em> Er varen på lager
                      sendes den samme dag, hvis bestillingen er afgivet en
                      arbejdsdag før kl. 13. Alternativt sendes den næste
                      arbejdsdag. Bestilles der lagervarer sammen med
                      ikke-lagervarer, vil hele ordren som udgangspunkt blive
                      sendt samlet.
                    </p>
                  </Collapsible>
                </div>
              </div>
            </section>

            <section className="produkt-forslag-section">
              <h2>Andre så også</h2>
              <div className="produkt-wrapper">
                {limitedProducts.map((vinyl) => (
                  <Link
                    to={`/produkter/vinyler/${vinyl.id}`}
                    key={vinyl.id}
                    className="vinyl"
                    onClick={function () {
                      return window.scrollTo(0, 0);
                    }}
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
                            {vinyl.nyhed && (
                              <p className="nyhed-p">{vinyl.nyhed}</p>
                            )}
                          </div>
                          <div className="lagerstatus">
                            {vinyl.lagerstatus && (
                              <p className="lagerstatus-p">
                                {vinyl.lagerstatus}
                              </p>
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
                        ></Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* mobil visning  */
          <div className="vinyl-details">
            <section className="single-view-section">
              <div className="left-side-wrapper">
                <div className="single-vinyl-img">
                  <img
                    src={selectedVinyl.imgUrl}
                    alt="Produktbillede af den valgte vinyl"
                    className="produktbillede"
                  />
                  <figcaption>
                    Ved uoverensstemmelse mellem cover og titel gælder titel
                  </figcaption>
                </div>
              </div>

              <div className="right-side-wrapper">
                <div className="info-txt-shown">
                  <h1>{selectedVinyl.titel}</h1>
                  <div className="wrapper">
                    <h2>{selectedVinyl.kunstner}</h2>
                    {selectedVinyl.farve && <p>{selectedVinyl.farve}</p>}
                  </div>
                  {selectedVinyl.edition && (
                    <div className="edition-tag">
                      <p>{selectedVinyl.edition}</p>
                    </div>
                  )}
                  <div className="pris">
                    <p className="pr-stk">PRIS PR STK</p>
                    <p className="vinyl-pris">DKK {selectedVinyl.pris}</p>
                    {/*           <p className="lager-tag"></p> */}
                  </div>
                  {/*  <p>{selectedVinyl.desc_lang}</p> */}
                  <div className="read-more">
                    <p>
                      {visLæsMere
                        ? selectedVinyl.desc_lang // Vis den fulde tekst
                        : `${selectedVinyl.desc_lang.slice(0, 100)}...`}{" "}
                      {/* Vis kun en del af teksten */}
                    </p>
                    {selectedVinyl.desc_lang.length > 100 && (
                      <a onClick={toggleLæsMere}>
                        {visLæsMere ? "LÆS MINDRE" : "LÆS MERE"}
                      </a>
                    )}
                  </div>

                  <Button className={"cta-btn"} desc={"LÆG I KURV"}></Button>
                  <Collapsible label="Produktdetaljer">
                    <p>Medie: {selectedVinyl.medie}</p>
                    <hr></hr>
                    <p>Udgivet: {selectedVinyl.udgivet}</p>
                    <hr></hr>
                    <p>EAN / UPC: {selectedVinyl.ean_upc}</p>
                    <hr></hr>
                    <p>Udgiver: {selectedVinyl.udgiver}</p>
                    <hr></hr>
                    <p>Genre: {selectedVinyl.genre}</p>
                  </Collapsible>
                  <Collapsible label="Trackliste">
                    <p>{selectedVinyl.trackliste}</p>
                  </Collapsible>
                  <Collapsible label="Leveringsoplysninger">
                    <p>
                      <em>Hvornår leveres min bestilling?</em> Er varen på lager
                      sendes den samme dag, hvis bestillingen er afgivet en
                      arbejdsdag før kl. 13. Alternativt sendes den næste
                      arbejdsdag. Bestilles der lagervarer sammen med
                      ikke-lagervarer, vil hele ordren som udgangspunkt blive
                      sendt samlet.
                    </p>
                  </Collapsible>
                </div>
              </div>
              <aside className="share-content">
                <p>Del varen med dine venner:</p>
                <div className="some-svg">
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 20.0501C40 8.98246 31.04 0 20 0C8.96 0 0 8.98246 0 20.0501C0 29.7544 6.88 37.8346 16 39.6992V26.0652H12V20.0501H16V15.0376C16 11.1679 19.14 8.02005 23 8.02005H28V14.0351H24C22.9 14.0351 22 14.9373 22 16.0401V20.0501H28V26.0652H22V40C32.1 38.9975 40 30.4561 40 20.0501Z"
                      fill="#4F4F4F"
                    />
                  </svg>

                  <svg
                    viewBox="0 0 46 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.2623 9.33033C41.2623 9.72231 41.2623 10.1374 41.2623 10.5293C41.284 14.0115 40.6058 17.4632 39.2671 20.6844C37.9282 23.9055 35.9556 26.832 33.4633 29.2943C30.971 31.7567 28.0089 33.7055 24.7485 35.0283C21.4881 36.3509 17.9943 37.021 14.4698 36.9995C9.34035 37.0143 4.31576 35.5651 0 32.8261C0.770167 32.8261 1.49366 32.8261 2.33384 32.8261C6.56616 32.8261 10.6758 31.4214 14.003 28.8371C12.0308 28.8196 10.1148 28.1855 8.52995 27.0257C6.94509 25.8659 5.77275 24.2399 5.18112 22.3809C5.77544 22.4746 6.37638 22.5209 6.97818 22.5193C7.81171 22.5133 8.64179 22.4128 9.45205 22.2195C7.34345 21.7944 5.44832 20.6625 4.08739 19.0152C2.72646 17.3682 1.98334 15.3071 1.98376 13.181C3.28859 13.8921 4.74253 14.2946 6.23135 14.3569C4.91768 13.4984 3.84136 12.3299 3.09971 10.957C2.35809 9.5842 1.97454 8.05036 1.98376 6.49424C1.98668 4.87439 2.42136 3.28388 3.24404 1.88271C5.60525 4.7595 8.55175 7.11422 11.8927 8.79438C15.2336 10.4745 18.8946 11.4427 22.6383 11.6361C22.4901 10.9383 22.4119 10.2278 22.4049 9.5148C22.344 7.61687 22.8777 5.74664 23.9328 4.15954C24.9882 2.57241 26.5134 1.34576 28.3006 0.647049C30.0876 -0.0516446 32.0497 -0.18833 33.9184 0.255669C35.7871 0.699667 37.4714 1.70272 38.7418 3.12782C40.8539 2.70866 42.8759 1.92836 44.7164 0.822056C44.0134 2.97371 42.5352 4.79533 40.5622 5.94086C42.4379 5.7406 44.2716 5.25851 46 4.51128C44.7201 6.35811 43.1436 7.98591 41.3323 9.33033H41.2623Z"
                      fill="#4F4F4F"
                    />
                  </svg>

                  <svg
                    viewBox="0 0 46 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 34V0H46V33.9959H0V34ZM6.29573 30.2484H39.7043L29.0176 19.6757L23 25.6369L16.9845 19.6778L6.29573 30.2484ZM3.75318 27.613L14.3687 17.092L3.75318 6.62265V27.613ZM31.6292 17.092L42.2489 27.613V6.62058L31.6292 17.092ZM23.0021 20.3744L39.7754 3.7826L6.22673 3.78053L23.0021 20.3744Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </div>
              </aside>
            </section>

            <section className="produkt-forslag-section">
              <h2>Andre så også</h2>
              <div className="produkt-wrapper">
                {limitedProducts.map((vinyl) => (
                  <Link
                    to={`/produkter/vinyler/${vinyl.id}`}
                    key={vinyl.id}
                    className="vinyl"
                    onClick={function () {
                      return window.scrollTo(0, 0);
                    }}
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
                            {vinyl.nyhed && (
                              <p className="nyhed-p">{vinyl.nyhed}</p>
                            )}
                          </div>
                          <div className="lagerstatus">
                            {vinyl.lagerstatus && (
                              <p className="lagerstatus-p">
                                {vinyl.lagerstatus}
                              </p>
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
                        ></Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  );
}

export default VinylSingle;
