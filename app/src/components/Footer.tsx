import React, { useEffect, useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { useNavigate, useLocation } from 'react-router'
import { getValueForRoute, navigation } from '../config'
import { Box } from '@material-ui/core'
import { useAutoTranslation } from '../hooks/useAutoTranslation'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = (): JSX.Element => {
  const navigate = useNavigate()
  const currentPath = useLocation().pathname
  const [value, setValue] = useState(getValueForRoute(currentPath))
  const [at] = useAutoTranslation()

  useEffect(() => {
    setValue(getValueForRoute(currentPath))
  }, [currentPath])

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          backgroundColor: 'primary.main',
          position: 'fixed',
          bottom: 0,
          height: '64px',
          width: '100%'
        }}
      >
        <BottomNavigationAction
          label={at('about')}
          onClick={() => navigate('/about')}
          value={'about'}
        />
        <BottomNavigationAction
          label={at('Home')}
          onClick={() => navigate(navigation.home.path)}
          value={'home'}
        />
        <BottomNavigationAction
          label={at('Legalnotice')}
          onClick={() => navigate(navigation.legalnotice.path)}
          value={'legalnotice'}
        />
        <BottomNavigationAction
          showLabel={false}
          label='LinkedIn'
          icon={<LinkedInIcon />}
          onClick={() => { location.href = navigation.linkedIn.path }}
          />
        <BottomNavigationAction
          showLabel={false}
          label='Github'
          icon={<GitHubIcon />}
          onClick={() => { location.href = navigation.gitHub.path }}
          />
      </BottomNavigation>
    </Box>
  )
}

export default Footer
