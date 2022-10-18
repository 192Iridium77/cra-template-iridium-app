import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Stories from "./pages/Stories";
import Story from "./pages/Story";

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
              element={<Navigate to="/stories" replace={true} />}
            />
            <Route path="/stories" element={<Stories />} />
            <Route path="/book/:bookId" element={<Story />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
