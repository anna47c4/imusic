import React, { createContext, useEffect, useState } from "react";
import { getData } from "../modules/db";

const VinylDataContext = createContext([]);

function VinylDataContextProvider({ children }) {
  const [vinylData, setVinylData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setVinylData(data);
      } catch (error) {
        console.error("Fejl ved hentning af data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <VinylDataContext.Provider value={vinylData}>
      {children}
    </VinylDataContext.Provider>
  );
}

export { VinylDataContext, VinylDataContextProvider };
