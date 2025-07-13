'use client'

import { View, Text } from 'react-native'
import { getFavorites } from '../favorite-watch/hooks/useFavorites'

export function FavoritesScreen() {
    const favorites = getFavorites()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Favorite Watches</Text>
            {favorites.length > 0 ? (
                favorites.map((id) => <Text key={id}>Watch ID: {id}</Text>)
            ) : (
                <Text>You have no favorite watches yet.</Text>
            )}
        </View>
    )
}