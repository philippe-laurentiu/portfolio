import React from 'react'
import Box from '@material-ui/core/Box'

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
    <Box sx={style}>
      {/* <AsymmetricImage image={projectImage} /> */}
    </Box>
  )
}
