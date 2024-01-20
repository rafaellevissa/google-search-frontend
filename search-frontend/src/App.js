import React from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchResults, setSearchResults] = React.useState([]);

  return (
    <div>
      <h1>Google Search App</h1>
      <SearchForm />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
