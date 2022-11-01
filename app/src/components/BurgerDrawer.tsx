import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useKey from '../hooks/useKey'

type Test = {
    toggle: boolean,
    setToggle: (val: boolean) => void
  }

const BurgerDrawer = ({toggle, setToggle}: Test) => {
    // useKey('Enter', () => setToggle(!toggle))
    return (
        <SwipeableDrawer
            className='burgerDrawer'
            anchor='left'
            open={toggle}
            onClose={() => setToggle(false)}
            onOpen={() => setToggle(true)}
        >
        <p>test a bit of space</p>
      </SwipeableDrawer>
    )
}

export default BurgerDrawer