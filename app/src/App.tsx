import './App.css'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange } from '@mui/material/colors'
import { yellow } from '@material-ui/core/colors'
import 'fontsource-roboto'
import Container from '@material-ui/core/Container'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";
import Pagelayout from './Pagelayout'

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        de: {
            common: common_de
        },
    },
});

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
      <I18nextProvider i18n={i18next}>
        <Container>
          <div className="App">
            <Pagelayout />
          </div>
        </Container>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
