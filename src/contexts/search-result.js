import { createContext, useState } from "react";

export const SearchResultContext = createContext([]);

export const SearchResultProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <SearchResultContext.Provider
      value={{ searchResults, updateSearchResults }}
    >
      {children}
    </SearchResultContext.Provider>
  );
};
