import { createTheme} from '@mui/material/styles';


export const MainTheme = createTheme({

  palette: {
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