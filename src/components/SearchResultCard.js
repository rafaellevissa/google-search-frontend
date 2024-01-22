import React from "react";
import { Card, CardContent, Typography, Link as MuiLink } from "@mui/material";

const SearchResultCard = ({ title, url, snippet }) => (
  <Card variant="outlined" style={{ margin: "10px" }}>
    <CardContent>
      <Typography variant="h5" component="div">
        <MuiLink
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          color="textPrimary"
        >
          {title}
        </MuiLink>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {snippet}
      </Typography>
    </CardContent>
  </Card>
);

export default SearchResultCard;
