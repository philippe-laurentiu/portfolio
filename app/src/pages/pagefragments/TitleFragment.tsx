import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const TitleFragment = (): JSX.Element => {
  return (
    <Box width={'100%'} height={'100px'} textAlign={'center'}>
      <Typography variant={'h3'} lineHeight={'90px'}>
        Test Title
      </Typography>
    </Box>
  )
}

export default TitleFragment
