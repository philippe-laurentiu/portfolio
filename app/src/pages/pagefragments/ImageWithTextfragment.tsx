import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import AsymmetricImage from '../../components/AsymmetricImage'
import Typography from '@material-ui/core/Typography'

export interface ImageWithTextInterface {
  background: string
  projectImage: string
  titleLogoText: TitleLogoTextInterface
}

export interface TitleLogoTextInterface {
  title: string
  logo?: string
  text: string
}

export const ImageWithTextFragment = ({ projectImage, background, titleLogoText }: ImageWithTextInterface): JSX.Element => {
  const style = {
    width: '400px',
    height: '250px',
    padding: '40px',
    paddingTop: '150px',
    paddingBottom: '150px',
    marginLeft: '50px',
    marginRight: '50px'
  }

  return (
    <Box width={'100%'} sx={{
      backgroundImage: background
    }}>
      <Grid container justifyContent='center'>
        <Grid item>
          <Box sx={style}>
            <AsymmetricImage image={projectImage} />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={style}>
            <TitleLogoText {...titleLogoText}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export const TitleLogoText = ({ title, logo, text }: TitleLogoTextInterface): JSX.Element => {
  let logoelement = <Box margin={'40px'}></Box>

  if (typeof logo !== 'undefined') {
    logoelement = (
      <Box margin={'40px'}>
        <img src={logo} alt='logo' className='image'/>
      </Box>
    )
  }

  return (
    <Box>
      <Typography gutterBottom={true} variant='h4'>
        {title}
      </Typography>
      { logoelement }
      <Typography>
        {text}
      </Typography>
    </Box>
  )
}
