import React, {useState} from 'react'
import Header from '../components/Header'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'


const Landingpage = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div>
            <Header />
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
        </div>
    )
}

export default Landingpage