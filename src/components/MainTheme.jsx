import { createTheme} from '@mui/material/styles';


export const MainTheme = createTheme({

  palette: {
    background: {
      paper: "#f9f6f6",
      default: "#E5E5E5",
    },
    primary: {
      main: '#0bb89b',
    },
    secondary: {
      main: '#032639',
      contrastText: '#0bb89b',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },

  });
