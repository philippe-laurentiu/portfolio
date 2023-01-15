import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { checkMediaQuery } from 'src/utils/checkMediaQuery'

export interface PropsBox {
  orderDe: number[]
  orderMo: number[]
  children: React.ReactNode[]
}

export const TwoBoxesFragment = ({ children, orderDe, orderMo }: PropsBox): JSX.Element => {
  const style = {
    width: '400px',
    height: '250px',
    padding: '40px',
    paddingTop: '150px',
    paddingBottom: '150px',
    marginLeft: '50px',
    marginRight: '50px'
  }
  const order = checkMediaQuery() ? orderDe : orderMo

  return (
    <Box width={'100%'} sx={{
      backgroundImage: 'white'
    }}>
      <Grid container justifyContent='center'>
        <Grid item>
          <Box sx={style}>
            {children[order[0]]}
          </Box>
        </Grid>
        <Grid item>
          <Box sx={style}>
            {children[order[1]]}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
