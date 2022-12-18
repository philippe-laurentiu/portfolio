import { useCallback } from 'react'

export const useAutoTranslation = (): (input: string) => string => {
  return useCallback((input: string) => {
    return input
  }, [])
}
