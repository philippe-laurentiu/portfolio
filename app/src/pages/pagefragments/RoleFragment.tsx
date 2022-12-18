import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import { useAutoTranslation } from '../../hooks/useAutoTranslation'

export const RoleFragment = (): JSX.Element => {
  const [at] = useAutoTranslation()
  const test = ['hase', 'cat']
  return (
    <Box>
      <Typography variant={'h3'}>{at('Role')}</Typography>
      {test.map((r, key) => {
        return <Typography key={key}>{at(r)}</Typography>
      })}
    </Box>
  )
}
