import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#f14d54',
    },
    secondary: {
      main: '#414141',
      light: '#838383',
      lighter: '#212121',
    },
    secondary1:{
      main: '#80bf32',
    }
  },

  components:{
    MuiTextField: {
    styleOverrides : {
      root:{
        input:{
          height:"40px",
          padding:'0',
          paddingLeft:"7px",
        },
      },
      }
    }
  },

  typography: {
    fontSize: 14,
    fontFamily: 'Roboto',
    h1: {
      fontSize: 32,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    h3: {
      fontSize: 18
    },
    h4: {
      fontSize: 16
    },
    text14 :{
      fontSize: 14
    },
    body2: {
      fontSize: 15
    },
    button: {
      fontSize: 16,
      textTransform: 'none',
    },
  },
});

export default Theme