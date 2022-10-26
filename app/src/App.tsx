import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landingpage from './pages/Landingpage';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange } from '@mui/material/colors';
import { yellow } from '@material-ui/core/colors';

const theme = createTheme ({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: yellow[500]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Landingpage />
      </div>
    </ThemeProvider>
  );
}

export default App;
