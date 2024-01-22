import React from "react";
import SearchResultCard from "./SearchResultCard";
import { useSearchResult } from "../hooks/google-search";
import { Button, Container, AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const navigate = useNavigate();
  const { searchResults } = useSearchResult();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Search Results</Typography>
          <Button color="inherit" onClick={handleBack}>
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        {searchResults.length === 0 ? (
          <p>No result was found.</p>
        ) : (
          <ul>
            {searchResults.map(({ snippet, title, url }, index) => (
              <SearchResultCard
                key={index}
                snippet={snippet}
                title={title}
                url={url}
              />
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default SearchResults;
