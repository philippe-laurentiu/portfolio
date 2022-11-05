import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import common_de from './translations/de/common.json'
import common_en from './translations/en/common.json'
import Pagelayout from './Pagelayout'
import About from './pages/About'
import ErrorPage from './pages/Errorpage'
import Container from '@material-ui/core/Container'
import Landingpage from './pages/Landingpage'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    de: {
      common: common_de
    }
  }
}).then(() => {}).catch(() => { console.error('catch') })

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 11
    }
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
})

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Pagelayout />,
//     errorElement: <ErrorPage />,
//   },
// ]);

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Pagelayout />}>
                <Route index element={<Landingpage />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
