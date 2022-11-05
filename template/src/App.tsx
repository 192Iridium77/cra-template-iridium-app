import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Item from "./pages/Item";

import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from "./themes";

export default function MiniDrawer() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navigation />
        <Container sx={{ paddingTop: 4 }}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace={true} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/item/:itemId" element={<Item />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
