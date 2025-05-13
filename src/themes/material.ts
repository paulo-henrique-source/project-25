import { createTheme } from "@mui/material/styles";

const MaterialTheme = createTheme({
  palette: {
    primary: {
      main: "#00b96b",
      light: "#b5e7ce",
      dark: "#2a8658",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff4081",
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#000",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default MaterialTheme;
