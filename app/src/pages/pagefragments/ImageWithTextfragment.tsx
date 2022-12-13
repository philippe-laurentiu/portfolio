import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import testImg from '../../assets/test.jpg'
import testLogo from '../../assets/test_logo.png'
import AsymmetricImage from '../../components/AsymmetricImage'
import Typography from '@material-ui/core/Typography'

export interface ImageWithTextInterface {
  gradient: string
  projectImage: string
}

export const ImageWithTextFragment = ({ projectImage, gradient }: ImageWithTextInterface): JSX.Element => {
  console.log(gradient)
  return (
    <Box width={'100%'} sx={{
      backgroundImage: gradient
    }}>
      <Grid container justifyContent='center'>
        <Grid item>
          <Box
            sx={{
              width: '400px',
              height: '250px',
              padding: '40px',
              marginLeft: '50px',
              marginRight: '50px'
            }}
          >
            <AsymmetricImage image={projectImage} />
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              width: '400px',
              height: '250px',
              padding: '40px',
              marginLeft: '50px',
              marginRight: '50px'
            }}
          >
            <TestText />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export const TestImage = (): JSX.Element => {
  return (
        <img src={testImg} alt='test image' className='image'/>
  )
}

export const TestText = (): JSX.Element => {
  return (
    <Box>
      <Typography gutterBottom={true} variant='h4'>
        Title
      </Typography>
      <TestLogo />
      <Typography>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </Typography>
    </Box>
  )
}

export const TestLogo = (): JSX.Element => {
  return (
    <Box margin={'40px'}>
      <img src={testLogo} alt='test logo' className='image'/>
    </Box>
  )
}
