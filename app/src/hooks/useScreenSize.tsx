import { useEffect, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'

export default function useScreenSize (): string {
  const s = useMediaQuery('(max-width: 600px)')
  const m = useMediaQuery('(max-width: 700px)')
  const l = useMediaQuery('(max-width: 800px)')

  let display = s ? 's' : (m ? 'm' : (l ? 'l' : ''))

  if (display === '') {
    const size = window.innerWidth
    display = size <= 600 ? 's' : (size <= 700 ? 'm' : 'l')
  }

  const [design, setDesign] = useState(
    display
  )

  useEffect(() => {
    setDesign(display)
  }, [s, m, l])

  return design
}
