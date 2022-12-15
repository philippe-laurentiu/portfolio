import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface Props {
  children: React.ReactNode
}

export const TitleFragment = ({ children }: Props): JSX.Element => {
  return (
    <Box width={'100%'} height={'100px'} textAlign={'center'}>
      <Typography variant={'h3'} lineHeight={'90px'}>
        {children}
      </Typography>
    </Box>
  )
}
