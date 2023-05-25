// React imports
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Vinyldata
import { VinylDataContext } from "../components/VinylDataContext";

function VinylSearch() {
  const vinylData = useContext(VinylDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Funktionen, der udfører søgningen
  const performSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = vinylData.filter(
        (vinyl) =>
          vinyl.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vinyl.kunstner.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredResults);
    }
  };

  // Funktionen, der opdaterer søgetermet
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      clearSuggestions();
    } else {
      performSearch();
    }
  };

  // Funktionen, der viser forslag baseret på det indtastede søgeterm
  const showSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (inputValue === "") {
      clearSuggestions();
    } else {
      const filteredSuggestions = vinylData.filter(
        (vinyl) =>
          vinyl.titel.toLowerCase().slice(0, inputLength) === inputValue ||
          vinyl.kunstner.toLowerCase().slice(0, inputLength) === inputValue
      );

      const limitedSuggestions = filteredSuggestions.slice(0, 5); // Begræns antallet af forslag til 5

      setSuggestions(limitedSuggestions);
    }
  };

  // Funktionen, der rydder forslag
  const clearSuggestions = () => {
    setSuggestions([]);
  };
  // Funktionen, der rydder forslag og søgeterm
  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    clearSuggestions();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Søg efter vinyler"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyUp={(e) => showSuggestions(e.target.value)}
      />
      <button onClick={performSearch}>Søg</button>

      {/* Vis forslag, som liner til den konkrte vinyl */}

      {suggestions.map((vinyl) => (
        <Link
          onClick={clearSearch}
          to={`/produkter/vinyler/${vinyl.id}`}
          key={vinyl.id}
          className="vinyl"
        >
          <ul key={vinyl.id}>
            <li key={vinyl.id}>
              {vinyl.titel} - {vinyl.kunstner}
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
}

export default VinylSearch;
