import { useEffect, useRef } from 'react'

const useKey = (key: string, cb: any): any => {
  const callbackRef = useRef(cb)

  useEffect(() => {
    callbackRef.current = cb
  })

  useEffect(() => {
    const handle = (e: KeyboardEvent): any => {
      // if (e.code === key) {
      //     callbackRef.current(e)
      // }
      callbackRef.current()
    }
    document.addEventListener('keypress', handle)
    return () => document.removeEventListener('keypress', handle)
  })
}

export default useKey
