import React, { useState } from "react";

function VinylSearch({ vinyler }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Funktionen, der udfører søgningen
  const performSearch = () => {
    const filteredResults = vinyler.filter(
      (vinyl) =>
        vinyl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vinyl.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Søg efter vinyler"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={performSearch}>Søg</button>

      {/* Vis søgeresultater */}
      <ul>
        {searchResults.map((vinyl) => (
          <li key={vinyl.id}>
            {vinyl.artist} - {vinyl.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VinylSearch;
