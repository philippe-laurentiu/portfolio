import React, { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { useTheme } from '@material-ui/core/styles'

const Footer = () => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            sx={{
              backgroundColor: 'primary.main',
              position: 'fixed',
              bottom: 0,
              height: '64px',
              right: '24px',
              left: '24px'
            }}
        >
            <BottomNavigationAction label="Recents" />
            <BottomNavigationAction label="Favorites" />
            <BottomNavigationAction label="Nearby" />
        </BottomNavigation>
  )
}

export default Footer
