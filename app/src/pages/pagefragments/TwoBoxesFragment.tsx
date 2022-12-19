import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

export interface PropsBox {
  children: React.ReactNode[]
}

export const TwoBoxesFragment = ({ children }: PropsBox): JSX.Element => {
  console.log(children)
  const style = {
    width: '400px',
    height: '250px',
    padding: '40px',
    paddingTop: '150px',
    paddingBottom: '150px',
    marginLeft: '50px',
    marginRight: '50px'
  }

  return (
    <Box width={'100%'} sx={{
      backgroundImage: 'white'
    }}>
      <Grid container justifyContent='center'>
        <Grid item>
          <Box sx={style}>
            {children[0]}
          </Box>
        </Grid>
        <Grid item>
          <Box sx={style}>
            {children[1]}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
