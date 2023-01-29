import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: blue[800],
      light: blue[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: green[700],
      dark: green[800],
      light: green[500],
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#29292E',
      default: '#121214',
    }
  }
})