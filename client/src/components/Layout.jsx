import React from "react";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar {...props} />
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
