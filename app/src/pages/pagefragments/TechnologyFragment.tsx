import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TechLogoEnum, { TechLogoInterface } from '../../enums/TechLogoEnum'

export interface TechnologyFragmentInterface {
  technologies: string[]
}

export const TechnologyFragment = ({ technologies }: TechnologyFragmentInterface): JSX.Element => {
  const style = {
    width: '50px',
    height: 'auto',
    padding: '20px'
    // paddingTop: '150px',
    // paddingBottom: '150px',
    // marginLeft: '50px',
    // marginRight: '50px'
  }

  return (
    <Box>
      <Grid container justifyContent="center">
        {technologies.map((technology: string, key: number) => {
          const techKey = technology as keyof TechLogoInterface
          return (
            <Grid item key={key}>
              <Box sx={style}>
                <img src={TechLogoEnum[techKey]} width={style.width} height={style.height}></img>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
