import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import AsymmetricImage from '../../components/AsymmetricImage'
import Typography from '@material-ui/core/Typography'

export interface ImageWithTextInterface {
  height: number
  background: string
  projectImage?: string
  titleLogoText?: TitleLogoTextInterface
}

export interface TitleLogoTextInterface {
  title: string
  logo?: string
  text?: string
}

export const ImageWithTextFragment = ({
  height,
  projectImage,
  background,
  titleLogoText
}: ImageWithTextInterface): JSX.Element => {
  const h = `${height}px`
  const style = {
    width: '500px',
    height: h,
    padding: '40px',
    paddingTop: '100px',
    paddingBottom: '100px',
    marginLeft: '50px',
    marginRight: '50px'
  }

  if (projectImage == null) {
    style.width = '600px'
    style.height = '150px'
  }

  return (
    <Box
      width={'100%'}
      sx={{
        backgroundImage: background
      }}
    >
      <Grid container justifyContent="center">
        {projectImage != null && (
          <Grid item>
            <Box sx={style}>
              <AsymmetricImage image={projectImage} />
            </Box>
          </Grid>
        )}
        {titleLogoText != null && (
          <Grid item>
            <Box sx={style}>
              <TitleLogoText {...titleLogoText} />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export const TitleLogoText = ({
  title,
  logo,
  text
}: TitleLogoTextInterface): JSX.Element => {
  let logoelement = <Box margin={'40px'}></Box>

  if (typeof logo !== 'undefined') {
    logoelement = (
      <Box margin={'40px'}>
        <img src={logo} alt="logo" className="image" />
      </Box>
    )
  }

  let titleElement = <Typography gutterBottom={true} variant={'h4'}>
    {title}
  </Typography>

  if (text == null) {
    titleElement = <Typography gutterBottom={true} variant={'h3'}>
      {title}
    </Typography>
  }

  return (
    <Box>
      {titleElement}
      {logoelement}
      {text != null &&
        <Typography>{text}</Typography>
      }
    </Box>
  )
}
