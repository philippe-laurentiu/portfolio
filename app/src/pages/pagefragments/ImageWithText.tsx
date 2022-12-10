import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import testImg from '../../assets/test.jpg'
import AsymmetricImage from '../../components/AsymmetricImage'
import Typography from '@material-ui/core/Typography'

export interface ImageWithTextInterface {
  bgcolor: string
}

export const ImageWithText = ({ bgcolor }: ImageWithTextInterface): JSX.Element => {
  return (
    <Box width={'100%'} bgcolor={bgcolor}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item>
          <Box
            sx={{
              width: '400px',
              height: '250px',
              backgroundColor: 'yellow',
              padding: '20px'
            }}
          >
            <AsymmetricImage image={testImg} />
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              width: '400px',
              height: '250px',
              backgroundColor: 'yellow',
              padding: '20px'
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
        <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        </Typography>
  )
}
