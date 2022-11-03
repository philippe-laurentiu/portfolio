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

    const lang = [
      {
        langText: "German",
        langCode: "de"
      },
      {
        langText: "English",
        langCode: "en"
      },
    ]

    return (
        <SwipeableDrawer
          PaperProps={{
            sx: {
              backgroundColor: 'primary.light',
              width: '200px',
              height: 'auto',
              marginTop: '64px',
              marginRight: '24px' 
            }
          }}
          anchor='right'
          open={toggle}
          onClose={() => setToggle(false)}
          onOpen={() => setToggle(true)}
        >
        <List
        >
          {lang.map((data, key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton 
                onClick={() => i18n.changeLanguage(data.langCode)}
              >
                <ListItemText primary={data.langText} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


      </SwipeableDrawer>
    )
}

export default LanguageDrawer