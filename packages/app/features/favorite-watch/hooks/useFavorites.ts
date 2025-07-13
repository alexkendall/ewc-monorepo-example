import { useState, useEffect } from 'react'

// In a real app, this would come from a global state/context or an API call.
const mockFavorites = new Set<string>(['1']) // Let's pretend watch '1' is already a favorite

export const useFavorites = (watchId: string) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(mockFavorites.has(watchId))
  }, [watchId])

  const toggleFavorite = () => {
    if (mockFavorites.has(watchId)) {
      mockFavorites.delete(watchId)
      setIsFavorite(false)
    } else {
      mockFavorites.add(watchId)
      setIsFavorite(true)
    }
  }

  return { isFavorite, toggleFavorite }
}

export const getFavorites = () => {
    return Array.from(mockFavorites);
}