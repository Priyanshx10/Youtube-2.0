import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "650px",
        margin: "0 auto",
        padding: "4px 10px 4px 16px",
        background: "#1a1a1d",
        borderRadius: "40px",
        border: "1px solid #2c2c2f",
        transition: "0.3s ease",
        boxShadow: "0 0 18px rgba(0,0,0,0.25)",

        "&:hover": {
          borderColor: "#8a6bff",
          boxShadow: "0 0 20px rgba(138,107,255,0.35)",
        },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search anything…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "white",
          fontSize: "16px",
          letterSpacing: "0.3px",
        }}
      />

      <IconButton
        type="submit"
        sx={{
          padding: "10px",
          marginLeft: "4px",
          background: "#2a2a2f",
          borderRadius: "50%",
          color: "#8a6bff",
          transition: "0.3s ease",

          "&:hover": {
            background: "rgba(138,107,255,0.15)",
            transform: "scale(1.08)",
          },
        }}
        aria-label="search"
      >
        <SearchIcon style={{ fontSize: "26px" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
