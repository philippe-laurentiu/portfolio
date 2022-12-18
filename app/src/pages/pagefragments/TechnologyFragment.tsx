import React from 'react'
import { Box } from '@material-ui/core'
import logo_react from '../../assets/logos/logo_react.png'

export const TechnologyFragment = (): JSX.Element => {
  return (
    <Box width={'100px'} height={'auto'}>
      <img src={logo_react}></img>
    </Box>
  )
}
