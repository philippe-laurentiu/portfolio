import { useCallback } from 'react'

export const useAutoTranslation = (): Array<(input: string) => string> => {
  const at = useCallback((input: string) => {
    return input
  }, [])
  return [at]
}
