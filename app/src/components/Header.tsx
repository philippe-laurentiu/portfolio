import React, { useState } from 'react'
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import TranslateIcon from '@material-ui/icons/Translate'
import BurgerDrawer from './drawer/BurgerDrawer'
import LanguageDrawer from './drawer/LanguageDrawer'
import Drawer from './drawer/Drawer'
import useScreenSize from 'src/hooks/useScreenSize'

const Header = (): JSX.Element => {
  const display = useScreenSize()
  const [toggleBurger, setToggleBurger] = useState(false)
  const [toggleLanguage, setToggleLanguage] = useState(false)

  return (
    <AppBar position="fixed">
      <div>
      <Toolbar>
        <IconButton onClick={() => setToggleBurger(!toggleBurger)}>
          <MenuIcon sx={{ color: '3D3D3D' }}></MenuIcon>
        </IconButton>
        { (display === 'm' || display === 'l') &&
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setToggleLanguage(!toggleLanguage)}
          >
            <TranslateIcon />
          </Button>
        }
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
