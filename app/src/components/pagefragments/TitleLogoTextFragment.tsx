import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export interface TitleLogoTextInterface {
  title: string
  logo?: string
  text?: string
}

export const TitleLogoTextFragment = ({
  title,
  logo,
  text
}: TitleLogoTextInterface): JSX.Element => {
  let logoelement = <Box margin={'40px'}></Box>

  if (typeof logo !== 'undefined') {
    logoelement = (
      <Box margin={'40px'}>
        <img src={logo} alt='logo' className='image' />
      </Box>
    )
  }

  let titleElement = (
    <Typography gutterBottom={true} variant={'h4'} color={'text.primary'}>
      {title}
    </Typography>
  )

  if (text == null) {
    titleElement = (
      <Typography gutterBottom={true} variant={'h3'} color={'text.primary'}>
        {title}
      </Typography>
    )
  }

  return (
    <Box>
      {titleElement}
      {logoelement}
      {text != null && <Typography>{text}</Typography>}
    </Box>
  )
}
