import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemButton from '@material-ui/core/ListItemButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Box from '@material-ui/core/Box'
import HomeIcon from '@material-ui/icons/Home'
import { AssuredWorkload } from '@mui/icons-material'
import { ToggleDrawer } from './Drawer'
import { useNavigate } from 'react-router-dom'
import { navigation } from '../../config'
import { Typography } from '@material-ui/core'
import { useAutoTranslation } from '../../hooks/useAutoTranslation'

const BurgerDrawer = ({ toggle, setToggle }: ToggleDrawer): JSX.Element => {
  const navigate = useNavigate()
  const [at] = useAutoTranslation()

  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          backgroundColor: 'primary.light',
          width: '250px',
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
          <ListItemButton
            onClick={() => {
              setToggle(false)
              navigate(navigation.home.path)
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={at('home')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setToggle(false)
              navigate(navigation.about.path)
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={at('about')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setToggle(false)
              navigate(navigation.legalnotice.path)
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={at('legalnotice')} />
          </ListItemButton>
        </ListItem>
        <ListItem divider>
          <Box width={'100%'} textAlign={'center'} paddingTop={'20px'}>
            <Typography variant={'h6'}>{at('Projects')}</Typography>
          </Box>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setToggle(false)
              navigate(navigation.proexample.path)
            }}
          >
            <ListItemIcon>
              <AssuredWorkload />
            </ListItemIcon>
            <ListItemText primary={at('Project Example')} />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  )
}

export default BurgerDrawer
