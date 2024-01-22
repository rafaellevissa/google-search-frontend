import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { SearchResultProvider } from "./contexts/search-result";

function App() {
  return (
    <Router>
      <SearchResultProvider>
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </SearchResultProvider>
    </Router>
  );
}

export default App;
