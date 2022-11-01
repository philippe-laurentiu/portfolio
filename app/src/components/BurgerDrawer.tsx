import {useState} from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useKey from '../hooks/useKey'

const BurgerDrawer = () => {
    const [toggle, setToggle] = useState(false)
    useKey('Enter', () => setToggle(!toggle))

    return (
        <SwipeableDrawer
            anchor="left"
            open={toggle}
            onClose={() => setToggle(false)}
            onOpen={() => setToggle(true)}
        >
        <p>test</p>
      </SwipeableDrawer>
    )
}

export default BurgerDrawer