'use client'

import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti/app'
import { Text, View } from 'react-native'
import { FavoriteButton } from '../favorite-watch/components/FavoriteButton' // Import the new component

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 32,
      }}
    >
      <H1>Welcome to Solito.</H1>
      <View style={{ maxWidth: 600, gap: 16 }}>
        <Text style={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <TextLink
            href="https://twitter.com/fernandotherojo"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'blue' }}
          >
            Fernando Rojo
          </TextLink>
          .
        </Text>
      </View>
      {/* Add the new FavoriteButton component */}
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Text>Rolex Submariner</Text>
        <FavoriteButton watchId="1" />
      </View>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <TextLink
          href="/users/fernando"
          style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}
        >
          Regular Link
        </TextLink>
        <MotiLink
          href="/users/fernando"
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </View>
      {/* Add a link to the new favorites screen */}
      <TextLink href="/favorites" style={{ fontSize: 16, fontWeight: 'bold', color: 'green' }}>
        View Favorites
      </TextLink>
    </View>
  )
}

const H1 = ({ children }: { children: React.ReactNode }) => {
  return <Text style={{ fontWeight: '800', fontSize: 24 }}>{children}</Text>
}