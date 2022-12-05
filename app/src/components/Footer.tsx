import React, { useEffect, useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { useNavigate, useLocation } from 'react-router'
import { getValueForRoute } from '../config'

const Footer = (): JSX.Element => {
  const navigate = useNavigate()
  const currentPath = useLocation().pathname
  // todo rerender on change of other menue
  const [value, setValue] = useState(getValueForRoute(currentPath))

  useEffect(() => {
    setValue(getValueForRoute(currentPath))
  }, [currentPath])

  console.log(value)
  return (
    <BottomNavigation
      showLabels
      value={value}
      // onChange={(event, newValue) => {
      //   console.log(newValue)
      //   setValue(newValue)
      // }}
      sx={{
        backgroundColor: 'primary.main',
        position: 'fixed',
        bottom: 0,
        height: '64px',
        width: '100%'
      }}
    >
      <BottomNavigationAction
        label="About"
        onClick={() => navigate('/about')}
      />
      <BottomNavigationAction label="Home" onClick={() => navigate('/')} />
      <BottomNavigationAction
        label="TODO"
        onClick={() => console.log('TODO')}
      />
    </BottomNavigation>
  )
}

export default Footer
