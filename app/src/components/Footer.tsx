import React, { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const Footer = (): JSX.Element => {
  const [value, setValue] = useState(0)
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
