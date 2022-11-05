import React, { useState } from 'react'
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import TranslateIcon from '@material-ui/icons/Translate'
import { useTranslation } from 'react-i18next'
import BurgerDrawer from '../components/BurgerDrawer'
import LanguageDrawer from './LanguageDrawer'

const Header = (): JSX.Element => {
  const [t] = useTranslation('common')
  const [toggleBurger, setToggleBurger] = useState(false)
  const [toggleLanguage, setToggleLanguage] = useState(false)

  return (
        <AppBar position="static">
            <Toolbar
                sx={{
                  backgroundColor: 'primary.main'
                }}
            >
                <IconButton
                    onClick={() => setToggleBurger(!toggleBurger)}
                >
                    <MenuIcon>
                    </MenuIcon>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    { t('welcome.title', { framework: 'React' }) }
                </Typography>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => setToggleLanguage(!toggleLanguage)}
                >
                    <TranslateIcon />
                </Button>
            </Toolbar>
            <BurgerDrawer toggle={toggleBurger} setToggle={setToggleBurger}/>
            <LanguageDrawer toggle={toggleLanguage} setToggle={setToggleLanguage}/>
        </AppBar>
  )
}

export default Header
