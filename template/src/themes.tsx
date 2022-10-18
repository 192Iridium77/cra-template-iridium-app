import { createTheme } from "@mui/material";

import { red, grey } from "@mui/material/colors";

let baseTheme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
    secondary: {
      main: grey[800],
      light: "#fff",
    },
  },
});

let menuTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

export { baseTheme, menuTheme };
