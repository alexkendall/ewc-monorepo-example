import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from 'app/features/home/screen'
import { UserDetailScreen } from 'app/features/user/detail-screen'
import { FavoritesScreen } from 'app/features/favorite-watch/screen' // Import the new screen

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  favorites: undefined // Add the new route
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      {/* Add the new screen to the navigator */}
      <Stack.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
        }}
      />
    </Stack.Navigator>
  )
}