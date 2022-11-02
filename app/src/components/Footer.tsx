import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { useState } from 'react'
const Footer = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                sx={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0
                }} 
            >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby"  />
            </BottomNavigation>
        </div>

    )
}

export default Footer