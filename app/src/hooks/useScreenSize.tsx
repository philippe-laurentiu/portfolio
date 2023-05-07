import { useEffect, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'

export default function useScreenSize (): string {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [design, setDesign] = useState(isMobile ? 'mobile' : 'desktop')

  useEffect(() => {
    setDesign(isMobile ? 'mobile' : 'desktop')
  }, [isMobile])

  return design
}
