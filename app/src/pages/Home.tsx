import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const Home = (): JSX.Element => {
  return (
        <div>
            <Container>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Paper sx={{
                          width: '400px',
                          height: '200px',
                          backgroundColor: 'yellow',
                          padding: '20px'
                        }}/>
                    </Grid>
                    <Grid item>
                        <Paper sx={{
                          width: '400px',
                          height: '200px',
                          backgroundColor: 'yellow',
                          padding: '20px'
                        }}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
  )
}

export default Home
