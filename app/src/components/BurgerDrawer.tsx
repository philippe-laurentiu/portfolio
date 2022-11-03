import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import useKey from '../hooks/useKey'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemButton from '@material-ui/core/ListItemButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'

type Test = {
    toggle: boolean,
    setToggle: (val: boolean) => void
  }

const BurgerDrawer = ({toggle, setToggle}: Test) => {
    // useKey('Enter', () => setToggle(!toggle))
    return (
        <SwipeableDrawer
          PaperProps={{
            sx: {
              backgroundColor: 'primary.light',
              width: '200px',
              height: 'auto',
              marginTop: '64px',
              marginLeft: '24px' 
            }
          }}
          anchor='left'
          open={toggle}
          onClose={() => setToggle(false)}
          onOpen={() => setToggle(true)}
        >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"home"} />
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
    )
}

export default BurgerDrawer