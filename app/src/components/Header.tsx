import { Toolbar, AppBar, IconButton, Button } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import TranslateIcon from "@material-ui/icons/Translate"
import { useTranslation } from "react-i18next"

const Header = () => {
    const [t, i18n] = useTranslation("common")
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                >
                    <MenuIcon>
                    </MenuIcon>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    { t('welcome.title', {framework:'React'}) }
                </Typography>
                {/* <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => i18n.changeLanguage('de')}
                >
                    DE
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => i18n.changeLanguage('en')}
                >
                    EN
                </Button> */}
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => alert("hase")}
                >
                    <TranslateIcon />   
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header