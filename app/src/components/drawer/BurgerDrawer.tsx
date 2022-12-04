import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemButton from '@material-ui/core/ListItemButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import { ToggleDrawer } from './Drawer'
import { useNavigate } from 'react-router-dom'

const BurgerDrawer = ({ toggle, setToggle }: ToggleDrawer): JSX.Element => {
  const navigate = useNavigate()
  // useKey('Enter', () => setToggle(!toggle))
  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          backgroundColor: 'primary.light',
          width: '200px',
          height: 'auto',
          marginTop: '64px'
        }
      }}
      anchor="left"
      open={toggle}
      onClose={() => setToggle(false)}
      onOpen={() => setToggle(true)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'home'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/about')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'about'} />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  )
}

export default BurgerDrawer
