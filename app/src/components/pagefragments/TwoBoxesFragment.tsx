import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { checkMediaQuery } from 'src/utils/checkMediaQuery'

export interface TwoBoxInterface {
  background: string
  orderDe: number[]
  orderMo: number[]
  children: React.ReactNode[]
}

export const TwoBoxesFragment = ({
  children,
  orderDe,
  orderMo,
  background
}: TwoBoxInterface): JSX.Element => {

  
  const style1 = {
    width: '400px',
    height: '450px',
    padding: '40px',
    paddingTop: '50px',
    paddingBottom: '50px',
    marginLeft: '50px',
    marginRight: '50px'
  }

  const style2 = {
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
    <Box
      width={'100%'}
      sx={{
        backgroundImage: background
      }}
    >
      <Grid container justifyContent='center'>
        <Grid item>
          <Box sx={style1}>{children[order[0]]}</Box>
        </Grid>
        <Grid item>
          <Box sx={style2}>{children[order[1]]}</Box>
        </Grid>
      </Grid>
    </Box>
  )
}
