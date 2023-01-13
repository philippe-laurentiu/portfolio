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
import Home from './pages/Home'
import ProExample from './pages/projects/ProExample'
import { navigation } from './config'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LeagalNotice from './pages/LegalNotice'
import Certificats from './pages/Certificats'

const initLanguage = async (): Promise<any> => {
  await i18next.init({
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
  })
}

const theme1 = createTheme({
  typography: {
    // body1: {
    //   color: '#333333'
    // },
    // h4: {
    //   color: '#333333'
    // },
    // h3: {
    //   color: '#333333'
    // },
    // h2: {
    //   color: '#333333'
    //   // fontSize: 11
    // }
  },
  palette: {
    primary: {
      light: '#A0A0A0', // secound background color
      main: '#333333', // first background color
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: 'white',
      dark: '#333333',
      contrastText: '#000'
    },
    text: {
      primary: '#333333',
      secondary: 'white'
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
        disableGutters: true
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-selected': {
            color: 'gray'
          }
        }
      }
    }
  }
})

const App = (): JSX.Element => {
  initLanguage().catch(() => console.log('do some error handling'))
  return (
    <ThemeProvider theme={theme1}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Pagelayout />}>
              <Route index element={<Home />} />
              <Route path={navigation.about.path} element={<About />} />
              <Route
                path={navigation.legalnotice.path}
                element={<LeagalNotice />}
              />
              <Route
                path={navigation.certificats.path}
                element={<Certificats />}
              />
              <Route
                path={navigation.proexample.path}
                element={<ProExample />}
              />
              <Route path='*' element={<ErrorPage />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
