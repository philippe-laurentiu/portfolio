import useMediaQuery from '@mui/material/useMediaQuery'

export const checkMediaQuery = (): boolean => {
  const matches = useMediaQuery('(min-width:1374px)')
  return matches
}
