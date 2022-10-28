import { Toolbar, AppBar, IconButton, Button } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton>
                    <MenuIcon>
                    </MenuIcon>
                </IconButton>
                <Typography variant="h6">
                    Portfolio
                </Typography>
                <Button
                    variant='contained'
                    color='secondary'
                >
                    Test
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header