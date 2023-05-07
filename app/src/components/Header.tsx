import React, { useState } from 'react'
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import TranslateIcon from '@material-ui/icons/Translate'
import { useTranslation } from 'react-i18next'
import BurgerDrawer from './drawer/BurgerDrawer'
import LanguageDrawer from './drawer/LanguageDrawer'
import Drawer from './drawer/Drawer'
import useScreenSize from '../hooks/useScreenSize'

const Header = (): JSX.Element => {
  const test = useScreenSize()
  console.log(test)
  const [t] = useTranslation('common')
  const [toggleBurger, setToggleBurger] = useState(false)
  const [toggleLanguage, setToggleLanguage] = useState(false)

  return (
    <AppBar position="fixed">
      <div>
      <Toolbar>
        <IconButton onClick={() => setToggleBurger(!toggleBurger)}>
          <MenuIcon sx={{ color: 'white' }}></MenuIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('welcome.title', { framework: 'React' })}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setToggleLanguage(!toggleLanguage)}
        >
          <TranslateIcon />
        </Button>
      </Toolbar>
      </div>
      <Drawer>
        <BurgerDrawer toggle={toggleBurger} setToggle={setToggleBurger} />
        <LanguageDrawer toggle={toggleLanguage} setToggle={setToggleLanguage} />
      </Drawer>
    </AppBar>
  )
}

export default Header
