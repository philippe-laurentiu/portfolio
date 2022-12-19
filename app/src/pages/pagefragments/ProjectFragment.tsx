import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useAutoTranslation } from '../../hooks/useAutoTranslation'

const ProjectFragment = (): JSX.Element => {
  const [at] = useAutoTranslation()
  return (
    <Box>
      <Typography variant={'h3'}>
        {at('Project specification')}
      </Typography>
      <Typography>
        {at('Team Size:')}
      </Typography>
      <Typography>
        {at('Duration:')}
      </Typography>
      <Typography>
        {at('Available funds:')}
      </Typography>
      <Typography>
        {at('Organistaion Mehode:')}
      </Typography>
    </Box>
  )
}
