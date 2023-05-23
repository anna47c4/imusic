/* 
ITERATION 1 - Hvor pordukter var klikbar, og det skulle den ikke, da siden ikke eksisterer
import { Link, useLocation } from "react-router-dom";
function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <>
      <div className="breadcrumbs">{crumbs}</div>
    </>
  );
}
export default Breadcrumbs;
  //Funktion der sørger for at vi får vist brugerens lokation på siden, og
  //sørger for at Produkter ikke er klikbar, men blot vises når man er inde på
  //f.eks. vinyler vil der stå Produkter > Vinyler
  //Her i vores return statement' får vi det gældende resultat ud,
  //som vi ønsker at vise i vores frontend


/* BEST WORKING VERSION, MEN UDEN VINYL TITEL, BARE ID'ET */
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";

  // Tjek om placeringen er root-stien ("/")
  if (location.pathname === "/") {
    return null; // Returner intet (ingen brødkrummer)
  }

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;

      if (index === 0) {
        return (
          <div className="crumb" key={crumb}>
            {crumb}
          </div>
        );
      }

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink} className="krumme">
            {crumb}
          </Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;

/* FORSØG MED VINYL TITEL I STEDET FOR ID */
/* import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { VinylDataContext } from "../components/VinylDataContext";

function Breadcrumbs() {
  const location = useLocation();
  const vinylData = useContext(VinylDataContext);

  // Tjek om placeringen er root-stien ("/")
  if (location.pathname === "/") {
    return null; // Returner intet (ingen brødkrummer)
  }

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      const isLastCrumb = index === crumb.length - 1;
      let crumbLabel = "";

      if (isLastCrumb) {
        // Brug vinylproduktets titel som krummeetiket
        const vinyl = vinylData.find(
          (item) => parseInt(item.id, 10) === parseInt(crumb, 10)
        );
        if (vinyl) {
          crumbLabel = vinyl.titel;
        }
      } else if (crumb === "produkter") {
        crumbLabel = "Produkter";
      } else {
        crumbLabel = crumb;
      }

      return (
        <div className="crumb" key={crumb}>
          {isLastCrumb ? (
            <span>{crumbLabel}</span>
          ) : (
            <Link to={`/${crumb}`} className="krumme">
              {crumbLabel}
            </Link>
          )}
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;
 */
