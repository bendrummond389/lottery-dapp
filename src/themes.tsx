import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "black",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "black",
          color: 'white'
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#3AB4D1",
          marginTop: 50,
          padding: 25,
          backgroundImage: `linear-gradient(45deg, #3AB4F2, #F6F6F6)`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          // color: 'black'
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'black',
        }
      }
    }
  },
});
