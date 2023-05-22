/* import React, { useState, useRef, useEffect } from "react";
import { NavLink } from  */ "react-router-dom";

/* function Nav() { */

/*   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); */

/*   const subMenuRef = useRef(null);
  const hideTimeoutRef = useRef(null); */

/*   const handleSubMenuToggle = () => {
    clearTimeout(hideTimeoutRef.current);
    setIsSubMenuOpen(!isSubMenuOpen);
  };
 */
//her styrer vi submenuen når brugeren flytter musen væk,
//vi bestemmer at der skal gå 1 min før menuen forsvinder,
//så brugueren kan nå og trykke på et menupunkt i submenuen
/*   const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsSubMenuOpen(false);
    }, 1000); //den tid dropdown tager om at skjule sig igen
  }; */

//her styrer vi at submenuen lukkes når man klikker
//et andet sted, ved brug af useEffect, kører funktionen
//hver gang det er relevant
/*   useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setIsSubMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []); */

/*   return (
    <>
      <nav> */
{
  /*   <NavLink to="/" activeclassnamee="active">
          Hjem
        </NavLink> */
}

{
  /*  <div
          className={`submenu-trigger ${isSubMenuOpen ? "active" : ""}`}
          activeclassnamee="active"
          onMouseEnter={handleSubMenuToggle}
          onClick={handleSubMenuToggle}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleSubMenuToggle}
          onTouchEnd={handleSubMenuToggle}
        >
          Produkter{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 96 960 960"
            width="18"
          >
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>

        {isSubMenuOpen && (
          <ul
            className={`submenu ${isSubMenuOpen ? "open" : ""}`}
            ref={subMenuRef}
          >
            <li>
              <NavLink to="/produkter/vinyler" activeclassnamee="active">
                Vinyler
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/cder" activeclassnamee="active">
                Cd'er
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/film" activeclassnamee="active">
                Film
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/boeger" activeclassnamee="active">
                Bøger
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/merchandise" activeclassnamee="active">
                Merchandise
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/kpop" activeclassnamee="active">
                K-POP
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/audiohifi" activeclassnamee="active">
                Audio & Hi-Fi
              </NavLink>
            </li>
          </ul>
        )}
        <NavLink to="/godepriser" activeclassnamee="active">
          Gode priser
        </NavLink>
        <NavLink to="/gavekort" activeclassnamee="active">
          Gavekort
        </NavLink>
      </nav>
    </>
  );
} */
}

/* export default Nav; */

import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav({ vinylData }) {
  //herunder har vi vores state der styrer om vores submenu / dropdown menu er åben eller lukket
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  //herunder har vi to variabler vi bruger til at holde øje aktiviteten omkring submenuen
  const subMenuRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  //her sørger vi for at menuen er åben, og clearer vores timeout
  const handleSubMenuOpen = () => {
    clearTimeout(hideTimeoutRef.current);
    setIsSubMenuOpen(true);
  };

  //her sørger vi for at menuen lukkes efter vores timeout
  const handleSubMenuClose = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsSubMenuOpen(false);
    }, 3000); // (i millisekunder)
  };

  //her sørger vi for at menuen kan lukkes ved klik andre steder på skærmen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setIsSubMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  //herunder har vi vores return statement, som er den Nav vi får ud
  //i vores frontend - heri tjekker vi også om
  //submenuen er åben eller ej, og afhængig af det,
  //sættes der de relevante klasser på vores elementer
  return (
    <>
      <nav>
        {/*       <NavLink to="/" activeclassnamee="active">
          Hjem
        </NavLink> */}
        <div
          className={`submenu-trigger ${isSubMenuOpen ? "active" : ""}`}
          activeclassnamee="active"
          onMouseEnter={handleSubMenuOpen}
          onMouseLeave={handleSubMenuClose}
          onTouchStart={handleSubMenuOpen}
          onTouchEnd={handleSubMenuClose}
          /*    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} */
          ref={subMenuRef}
        >
          Produkter{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 96 960 960"
            width="18"
          >
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>
        {isSubMenuOpen && (
          <ul className={`submenu ${isSubMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/produkter/vinyler" activeclassname="active">
                Vinyler
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/cder" activeclassname="active">
                Cd'er
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/film" activeclassname="active">
                Film
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/boeger" activeclassname="active">
                Bøger
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/merchandise" activeclassname="active">
                Merchandise
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/kpop" activeclassname="active">
                K-POP
              </NavLink>
            </li>
            <li>
              <NavLink to="/produkter/audiohifi" activeclassname="active">
                Audio & Hi-Fi
              </NavLink>
            </li>
          </ul>
        )}
        <NavLink to="/godepriser" activeclassname="active">
          Gode priser
        </NavLink>
        <NavLink to="/gavekort" activeclassname="active">
          Gavekort
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
