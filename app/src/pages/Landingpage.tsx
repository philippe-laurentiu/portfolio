import React, {useState} from 'react'
import Header from '../components/Header'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'


const Landingpage = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div>
            <Container>
                <Typography variant="h2" component="div">
                    Test
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item>
                        <Paper style={{width: "50px", height: "70px", backgroundColor: "yellow" }}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{width: "50px", height: "70px", backgroundColor: "yellow" }}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{width: "50px", height: "70px", backgroundColor: "yellow" }}/>
                    </Grid>
                </Grid>
                <Button
                    variant='contained'
                >
                    primary
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                >
                    secondary
                </Button>
                <Checkbox 
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                />
            </Container>
        </div>
    )
}

export default Landingpage