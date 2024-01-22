import { useContext } from "react";
import { SearchResultContext } from "../contexts/search-result";

export const useSearchResult = () => {
  const context = useContext(SearchResultContext);
  if (!context) {
    throw new Error(
      "useSearchResult must be used within a SearchResultProvider"
    );
  }
  return context;
};
