import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import AsymmetricImage from '../AsymmetricImage'

export interface ImageInterface {
  height: number
  background: string
  projectImage?: string
}

export const ImageFragment = ({
  height,
  projectImage,
  background
}: ImageInterface): JSX.Element => {
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
  }

  return (
    <Box
      width={'100%'}
      sx={{
        backgroundImage: background
      }}
    >
      <Grid container justifyContent='center'>
        {projectImage != null && (
          <Grid item>
            <Box sx={style}>
              <AsymmetricImage image={projectImage} />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
