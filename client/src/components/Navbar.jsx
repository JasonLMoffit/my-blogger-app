import React from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Search, More, Menu } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const mQuery = useMediaQuery("(min-width:600px)");
  console.log(mQuery);
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: mQuery ? 0 : "auto",
        bottom: mQuery ? "auto" : 0,
      }}
    >
      <Toolbar>
        <IconButton color="secondary" aria-label="open drawer">
          <Menu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="secondary">
          <Search />
        </IconButton>
        <IconButton color="secondary">
          <More />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
