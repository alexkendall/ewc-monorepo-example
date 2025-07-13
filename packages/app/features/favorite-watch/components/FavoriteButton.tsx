'use client'

import { Pressable, Text } from 'react-native'
import { useFavorites } from '../hooks/useFavorites'

export const FavoriteButton = ({ watchId }: { watchId: string }) => {
    const { isFavorite, toggleFavorite } = useFavorites(watchId)

    return (
        <Pressable
            onPress={() => toggleFavorite()}
            style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: isFavorite ? 'gold' : 'lightgray',
            }}
        >
            <Text>{isFavorite ? '★ Unfavorite' : '☆ Favorite'}</Text>
        </Pressable>
    )
}