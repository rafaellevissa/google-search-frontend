import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import ApiService from "../services/ApiService";
import { useSearchResult } from "../hooks/google-search";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { updateSearchResults } = useSearchResult();
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await ApiService.performSearch({ query });

      updateSearchResults(response?.items ?? []);
    } catch (error) {
      console.error("Error performing search:", error);
    } finally {
      setLoading(false);
      navigate("/search");
    }
  };

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        marginTop="25%"
      >
        <Typography variant="h2" gutterBottom>
          Search App
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <TextField
          variant="outlined"
          style={{ marginBottom: "16px", flex: 1, width: "100%" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          variant="contained"
          onClick={handleSearch}
        >
          Search
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default SearchForm;
