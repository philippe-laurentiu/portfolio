import './App.css'
import Landingpage from './pages/Landingpage'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange } from '@mui/material/colors'
import { yellow } from '@material-ui/core/colors'
import 'fontsource-roboto'
import { Container } from '@material-ui/core'

const theme = createTheme ({
  typography: {
    h2: {
      fontSize: 11
    }
  },
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
      <Container maxWidth="xs">
        <div className="App">
          <Landingpage />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
