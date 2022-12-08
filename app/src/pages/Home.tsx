import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'
import { TestImage, TestText } from './PageFragments'
import testImg from '../assets/test.jpg'
import AsymmetricImage from '../components/AsymmetricImage'

const Home = (): JSX.Element => {
  return (
    <div>
        <Container>
            <Grid container spacing={2} justifyContent='center'>
                {/* <Divider textAlign="left">LEFT</Divider> */}
                <Grid item xs={12}>
                    <Box sx={{
                      width: '100%',
                      marginTop: '20px'
                    }}>
                      <Divider textAlign="left">LEFT</Divider>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{
                      width: '400px',
                      height: '250px',
                      backgroundColor: 'yellow',
                      padding: '20px'
                    }}>
                      <AsymmetricImage image={testImg} />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{
                      width: '400px',
                      height: '250px',
                      backgroundColor: 'yellow',
                      padding: '20px'
                    }}>
                      <TestText />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{
                      width: '100%',
                      marginTop: '20px'
                    }}>
                      <Divider textAlign="right">RIGHT</Divider>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{
                      width: '400px',
                      height: '250px',
                      backgroundColor: 'yellow',
                      padding: '20px'
                    }}>
                      <TestText />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{
                      width: '400px',
                      height: '250px',
                      backgroundColor: 'yellow',
                      padding: '20px'
                    }}>
                      <TestImage />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Home
