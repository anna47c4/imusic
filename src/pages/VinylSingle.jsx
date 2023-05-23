import { useParams } from "react-router-dom";
import { useContext } from "react";
import { VinylDataContext } from "../components/VinylDataContext";
function VinylSingle() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const vinylData = useContext(VinylDataContext);

  console.log("ID:", id);
  console.log("vinylData:", vinylData);

  // Find det specifikke vinylprodukt baseret på id'et
  /*   const selectedVinyl = vinylData.find((vinyl) => vinyl.id === id); */
  const selectedVinyl = vinylData.find((vinyl) => vinyl.id === parseInt(id));
  // Håndter tilfælde hvor det specifikke vinylprodukt ikke findes
  if (!selectedVinyl) {
    return <div>Vinylproduktet blev ikke fundet.</div>;
  }

  return (
    <>
      <div className="vinyl-details">
        <h2>Kunstner: {selectedVinyl.kunstner}</h2>
        <p>Album: {selectedVinyl.titel}</p>
      </div>
    </>
  );
}

export default VinylSingle;
