import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useKey from '../hooks/useKey'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemButton from '@material-ui/core/ListItemButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import { useTranslation } from 'react-i18next'



type ToggleDrawer = {
  toggle: boolean,
  setToggle: (val: boolean) => void
}

const LanguageDrawer = ({toggle, setToggle}: ToggleDrawer) => {
    const [t, i18n] = useTranslation("common")
    // useKey('Enter', () => setToggle(!toggle))
    return (
        <SwipeableDrawer
            className='LanguageDrawer'
            anchor='right'
            open={toggle}
            onClose={() => setToggle(false)}
            onOpen={() => setToggle(true)}
        >
        <List>
          {['english', 'German'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


      </SwipeableDrawer>
    )
}

export default LanguageDrawer