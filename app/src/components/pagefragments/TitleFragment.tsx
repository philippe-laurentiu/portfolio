import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TypographyVariantEnum from 'src/enums/TypographyVariantEnum'

export interface TitleInterface {
  children: React.ReactNode
  variant: keyof TypographyVariantEnum
}

export const TitleFragment = ({
  children,
  variant
}: TitleInterface): JSX.Element => {
  return (
    <Box width={'100%'} height={'100px'} textAlign={'center'}>
      <Typography variant={variant} lineHeight={'90px'} color={'text.primary'}>
        {children}
      </Typography>
    </Box>
  )
}
